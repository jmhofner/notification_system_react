import React from 'react';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Bell className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">
            Notification System
          </h1>
        </div>
      </div>
    </header>
  );
}