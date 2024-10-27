## Notification System - Frontend Solution

This project is the frontend solution for a comprehensive notification system designed to handle message distribution across multiple channels based on user preferences. The frontend is built with React and provides an intuitive interface for users to send messages and view log history.

### Key Features:

- **Message Categories:** Users can select from three predefined categories: Sports, Finance, and Movies. Notifications are sent only if the message category matches the user's subscriptions (managed by the backend).
- **User Interface:**
  1. **Submission Form:** A simple form where users can choose a category and enter a message. The form validates input to ensure the message field is not empty before submission.
  2. **Log History:** Displays all past messages sent, sorted from newest to oldest. Includes columns for the date and content of each message.
- **React Components:** Modular components for easy maintenance and scalability. The interface ensures a smooth user experience and aligns with best practices in React development.
- **Communication with Backend:** Integrates seamlessly with the backend RESTful API, sending and receiving data using HTTP requests. 
- **Responsive Design:** The user interface is responsive, ensuring a consistent experience across various devices and screen sizes.
- **Scalability:** Designed to accommodate new features or adjustments, with minimal changes required to the core UI structure.
- **Unit Testing:** Comprehensive tests for each component and functionality, ensuring robustness and reliability.

This frontend provides a user-friendly interface that complements the backend services, forming a solid foundation for a scalable, multi-channel notification system.
