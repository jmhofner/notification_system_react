import React from 'react';
import { NotificationProvider } from './context/NotificationContext';
import { Header } from './components/layout/Header';
import { PageContainer } from './components/layout/PageContainer';
import { NotificationForm } from './components/notification/NotificationForm';
import { NotificationLog } from './components/notification/NotificationLog';

function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <PageContainer>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <NotificationForm />
            <NotificationLog />
          </div>
        </PageContainer>
      </div>
    </NotificationProvider>
  );
}

export default App;