import { useState, useEffect, useCallback } from 'react';
import type { WaitlistEntry } from '@/types';

const STORAGE_KEY = 'scoopii_waitlist';

export function useWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load entries from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setEntries(parsed);
      }
    } catch (error) {
      console.error('Error loading waitlist:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      } catch (error) {
        console.error('Error saving waitlist:', error);
      }
    }
  }, [entries, isLoaded]);

  const addEntry = useCallback((firstName: string, lastName: string, email: string): { success: boolean; message: string } => {
    // Validate inputs
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      return { success: false, message: 'Please fill in all fields.' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    // Check for duplicate email
    const existingEntry = entries.find(entry => entry.email.toLowerCase() === email.toLowerCase());
    if (existingEntry) {
      return { success: false, message: 'This email is already on the waitlist.' };
    }

    const newEntry: WaitlistEntry = {
      id: crypto.randomUUID(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      timestamp: new Date().toISOString(),
      source: window.location.hostname,
    };

    setEntries(prev => [newEntry, ...prev]);
    return { success: true, message: 'You\'ve been added to the waitlist!' };
  }, [entries]);

  const removeEntry = useCallback((id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  }, []);

  const clearAllEntries = useCallback(() => {
    if (confirm('Are you sure you want to clear all waitlist entries? This cannot be undone.')) {
      setEntries([]);
      return true;
    }
    return false;
  }, []);

  const exportToCSV = useCallback(() => {
    if (entries.length === 0) {
      return { success: false, message: 'No entries to export.' };
    }

    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Timestamp', 'Source'];
    const csvContent = [
      headers.join(','),
      ...entries.map(entry => [
        entry.id,
        `"${entry.firstName}"`,
        `"${entry.lastName}"`,
        entry.email,
        entry.timestamp,
        entry.source,
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `scoopii-waitlist-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    return { success: true, message: `Exported ${entries.length} entries to CSV.` };
  }, [entries]);

  const getEntryCount = useCallback(() => entries.length, [entries]);

  return {
    entries,
    isLoaded,
    addEntry,
    removeEntry,
    clearAllEntries,
    exportToCSV,
    getEntryCount,
  };
}
