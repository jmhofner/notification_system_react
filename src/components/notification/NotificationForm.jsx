import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription } from '../ui/alert';
import { useNotificationContext } from '../../context/NotificationContext';
import { NOTIFICATION_CATEGORIES } from '../../utils/constants';

export function NotificationForm() {
  const { send, loading } = useNotificationContext();
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!category || !message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    try {
      const success = await send({ category, message });
      if (success) {
        setStatus({ type: 'success', message: 'Notification sent successfully' });
        setMessage('');
        setCategory('');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send notification' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Notification</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {NOTIFICATION_CATEGORIES.map(({value, label}) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="min-h-[100px]"
            />
          </div>

          {status && (
            <Alert variant={status.type === 'error' ? 'destructive' : 'default'}>
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Notification'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}