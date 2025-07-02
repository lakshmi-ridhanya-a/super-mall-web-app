# Super Mall Web Application

This project is a web-based application designed to manage and organize shop data, product offers, categories, and floor-wise details for a shopping mall. It includes both administrative and customer interfaces and is built using HTML, CSS, JavaScript, and Firebase.

## Objective

The goal of this project is to provide a centralized platform for:
- Admins to create and manage shop-related data
- Customers to view, compare, and filter shop offers and details
The system is intended to bridge accessibility for rural sellers and increase outreach for local businesses.

## Features

### Authentication
- Email and password-based login and registration
- Role selection: Admin or Customer
- Role-based access control to restrict or allow functionality

### Admin Functionalities
- Add new shops with category and floor allocation
- Add and manage product offers
- Add and manage categories and floors
- View and log user actions
- Compare offers from different shops
- Apply filters for shop listings

### Customer Functionalities
- View list of shops and their details
- View ongoing offers from all shops
- Apply filters to narrow down shop searches
- Compare offers between two selected shops

### Logging
- Every admin action (such as adding shop, offer, etc.) is logged with timestamp and user email
- Logging is implemented using Firestore

## Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- Firebase Authentication
- Firebase Firestore Database
- Modular JavaScript with separate scripts for features

## Setup and Installation

### Prerequisites
- Internet connection
- Firebase account
- Live Server extension (optional for local testing)

### Steps
1. Clone this repository
2. Open the project folder
3. Set up Firebase project and enable:
   - Firestore
   - Email/Password Authentication
4. Replace your Firebase configuration in `scripts/firebase-init.js`
5. Open `login.html` or `index.html` in your browser or via a local server

## File Structure

SuperMall/
│
├── index.html
├── login.html
├── dashboard.html
├── view.html
├── styles.css
│
├── scripts/
│ ├── firebase-init.js
│ ├── shop.js
│ ├── offer.js
│ ├── floor.js
│ ├── category.js
│ ├── compare.js
│ ├── logger.js
│
└── README.md


## How the System Works

- On login, the user selects their role (admin or customer).
  ![image](https://github.com/user-attachments/assets/63195305-8da5-4c5f-a6b3-646885be7f1b)

- Admins are redirected to `dashboard.html`, where they can perform CRUD operations on shops, offers, floors, and categories.
  ![image](https://github.com/user-attachments/assets/3d4872be-7fcf-4cd1-8835-1966b60f5d58)
![image](https://github.com/user-attachments/assets/52e89167-bb3c-4adb-8afb-169fed790afd)
![image](https://github.com/user-attachments/assets/2b28d0ca-e361-40e7-924c-f91caa8ef3ae)
![image](https://github.com/user-attachments/assets/421b4784-4ce0-4526-9f05-fc61c1fb8e89)
![image](https://github.com/user-attachments/assets/82da84e0-0af4-4ec3-a317-84ef42e39e9f)
![image](https://github.com/user-attachments/assets/835920ce-b5be-4bf7-881b-4991e652ff73)

- Customers are redirected to `view.html`, where they can only view shop data and compare offers.
  ![image](https://github.com/user-attachments/assets/60ce9734-2953-4d89-92d4-2db8699b2544)
![image](https://github.com/user-attachments/assets/b7078af8-3e17-4732-993f-381175b4145f)
![image](https://github.com/user-attachments/assets/ed500adf-7dc1-4a72-8879-46c0c2f6c84a)
![image](https://github.com/user-attachments/assets/ab654c88-ff49-4293-8dea-eafcdb94ba89)

- All data is stored and updated in real time using Firebase Firestore.

## Evaluation Criteria

| Component             | Description                                        |
|----------------------|----------------------------------------------------|
| Code Quality          | Modular, readable, and maintainable               |
| Database              | Firestore used for all real-time data storage     |
| Logging               | Admin actions logged to a separate collection     |
| Security              | Role-based access, Firebase Auth                  |
| Deployment            | Easily hostable using Firebase Hosting or local   |
| UI/UX                 | Simple, clean, and professional layout            |
| Optimization          | Query limits and UI responsiveness considered     |

## System Design

The system follows a modular design where each functional feature is separated into a different JavaScript module. All operations are performed through Firestore calls and UI updates are handled dynamically based on the data changes.

### Roles
- Admin: Full access to modify and manage data
- Customer: View-only access

### Collections
- `users`: Stores role information
- `shops`: Stores shop details
- `offers`: Stores offers linked to shop IDs
- `categories`: Stores all available categories
- `floors`: Stores floor numbers and purpose
- `logs`: Stores all admin activity

## Testing

- Manual testing was performed across all modules.
- Edge cases such as empty fields, role misuse, and invalid inputs were handled.
- Role restrictions and Firebase security rules can be further applied for production deployment.

## Future Enhancements

- Add image upload for shops and products
- Responsive layout for mobile and tablet
- Advanced search with multi-category filtering
- Graph-based analytics for admin dashboard

## License

This project is intended for academic and educational purposes. You may use and modify it with proper attribution.

## Author

Lakshmi Ridhanya A  
B.Tech Computer Science and Engineering  
Amrita Vishwa Vidyapeetham  
