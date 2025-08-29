# 🍽️ DigiMenu – Your Digital Menu Solution

## ✨ Features
- Create digital menus with ease  
- Generate unique **QR codes** for restaurants  
- Customers can scan QR code to view menu instantly  
- Manage restaurant info (name, address, phone)  
- Delete menu in real-time (Update feature will be available soon).
- Mobile-first responsive design with **Tailwind CSS**  
- State management with **Zustand**  
- Optimized data fetching & caching with **TanStack Query**  
- Secure backend with **Express.js & MongoDB**  
- FREE for restaurants 🚀  

---

## Usage
-Restaurant Admin

-Open http://localhost:3000

-Enter restaurant details (name, address, phone)

-Create your digital menu

-Generate and share the QR code

-Customer View

-Scan/Download the QR code using a phone camera

-Instantly see the restaurant menu in the browser

-No app installation required ✅

## ⚙️ Setup  

### 🔑 Prerequisites  
- Node.js (v16 or higher)  
- MongoDB (local or cloud instance, e.g. MongoDB Atlas)  
- npm or yarn  

---

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
   
   For MongoDB Atlas, use:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/digimenu
   ```

4. Start the backend server:
   ```bash
   node index.js
   ```
   
   For development with auto-restart:
   ```bash
   nodemon index.js
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:3000`

## API Endpoints

- `POST /api/menu` - Post Menu
- `GET /api/public/:_id` - Get public Menu
- `GET /api/restaurant/mypage` - Redirect to the Admin Authenticated Menu
- `DELETE /api/restaurant/mypage/:_id`- Delete the Admin Menu

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: Next.js, React, Tailwind CSS,ShadCn Ui, React Bits
- **Database**: MongoDB
- **Authentication**: Clerk Authentication
- **CORS**: Cross-origin resource sharing enabled

## Troubleshooting

- Make sure MongoDB is running and accessible
- Check that the backend server is running on port 5000
- Verify the MongoDB connection string in your `.env` file
- Ensure all dependencies are installed in both frontend, backend.

