# 🌱 AgriTech — Smart Farming

**An agriculture-focused web application designed to help farmers manage farms, track crops, and access digital agricultural services.**

AgriTech is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It aims to simplify agricultural management by bringing farm records, crop tracking, and marketplace-related functionality into a unified platform.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Overview](#-api-overview)
- [Testing](#-testing)
- [Security Considerations](#-security-considerations)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌾 Overview

Agriculture involves managing multiple activities, including farm registration, crop planning, monitoring growth stages, and accessing agricultural products and services.

AgriTech aims to provide a centralized digital platform for these activities through a user-friendly web interface and a REST API.

The application follows a client-server architecture:

- **Frontend:** Provides the user interface and application navigation.
- **Backend:** Processes requests, handles authentication, and manages application logic.
- **Database:** Stores application data using MongoDB.

The project is being developed as a modular application that can be extended with additional agricultural services.

---

## ✨ Features

### 1. User Authentication
- User registration and login.
- Authentication-based access to protected pages.
- User-specific application workflows.

### 2. Dashboard
- Centralized dashboard for accessing application modules.
- Overview of farm and crop management activities.
- Quick navigation to important features.

### 3. Farm Management
- Register and manage farm records.
- Associate agricultural activities with registered farms.
- Access farm information through the application.

### 4. Crop Management
- Add crops associated with a registered farm.
- Store crop names and varieties.
- Record cultivated area and planting dates.
- Track expected harvest dates.
- Maintain crop growth stages and notes.

### 5. Agricultural Marketplace
- Marketplace interface for agricultural products.
- Product discovery and related workflows.
- Booking functionality where implemented.

### 6. Responsive User Interface
- React-based frontend.
- Reusable interface components.
- Icon-based navigation and visual elements.

> **Note:** The final availability of individual features depends on their implementation and integration in the current project version.

---

## 🛠️ Technology Stack

| Technology | Category | Purpose |
|---|---|---|
| MongoDB | Database | Stores application records |
| Express.js | Backend framework | Handles HTTP requests and API routes |
| React.js | Frontend library | Builds the user interface |
| Node.js | Runtime environment | Executes the backend JavaScript |
| Vite | Frontend tooling | Development server and production builds |
| React Router | Frontend routing | Navigation between application pages |
| React Icons | UI library | Provides interface icons |
| Axios | HTTP client | Communicates with backend APIs |
| Nodemon | Development tool | Restarts the backend during development |
| Concurrently | Development tool | Runs frontend and backend commands together |

---

## 🏗️ Project Architecture

```text
                    ┌────────────────────────┐
                    │      User / Browser    │
                    └────────────┬───────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   React + Vite Client  │
                    │     localhost:5173     │
                    └────────────┬───────────┘
                                 │
                            HTTP / REST API
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   Node.js + Express.js │
                    │     localhost:8000     │
                    └────────────┬───────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │        MongoDB         │
                    │   Application Data     │
                    └────────────────────────┘
```

### Request Flow

1. A user interacts with the React frontend.
2. The frontend sends an HTTP request to the Express backend.
3. The backend validates the request and executes the relevant application logic.
4. MongoDB stores or retrieves the required data.
5. The backend returns a response to the frontend.
6. The frontend updates the interface based on the response.

---

## 📁 Project Structure

The project follows a separate frontend and backend structure.

```text
agritech/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   └── PageHeader.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Crops.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
├── package.json
├── .gitignore
└── README.md
```

> This is a representative structure based on the project files discussed during development. Actual filenames and directories may differ in your local version.

---

## ⚙️ Prerequisites

Install the following software before running the project:

- **Node.js:** A supported LTS version.
- **npm:** Installed with Node.js.
- **MongoDB:** A local MongoDB server or a MongoDB Atlas database.
- **Git:** Optional, for version control.
- **Visual Studio Code:** Recommended editor.

Verify your installations:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation and Setup

### Step 1: Clone the Repository

If the project is hosted on GitHub:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd agritech
```

Alternatively, open the existing project directory in your terminal.

### Step 2: Install Root Dependencies

From the project root:

```bash
npm install
```

### Step 3: Install Frontend and Backend Dependencies

If your root `package.json` defines the `install:all` script, run:

```bash
npm run install:all
```

Otherwise, install each set of dependencies separately:

```bash
npm install --prefix client
npm install --prefix server
```

### Step 4: Configure MongoDB

Start your local MongoDB server or create a database in MongoDB Atlas.

Make sure the database connection string is correctly configured in the backend environment file.

### Step 5: Configure Environment Variables

Create or update `server/.env` using the variables expected by your backend.

An illustrative configuration is:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/agritech
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Additional variables may be required depending on the backend implementation.

**Important:**
- Replace placeholder secrets with secure values.
- Never commit `.env` files containing credentials to GitHub.
- Do not share database passwords or authentication secrets publicly.

---

## ▶️ Running the Application

### Start Both Frontend and Backend

From the project root directory:

```bash
npm run dev
```

The root script starts the frontend and backend concurrently.

Expected local addresses:

| Service | Address |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:8000` |

The backend terminal should indicate that MongoDB has connected successfully and the API server is running.

### Start the Frontend Separately

```bash
cd client
npm run dev
```

### Start the Backend Separately

Open another terminal:

```bash
cd server
npm run dev
```

Keep both services running while using the application.

### Create a Production Frontend Build

```bash
cd client
npm run build
```

Vite generates the production assets in the `client/dist/` directory.

A successful build confirms that the frontend compiles, but the application must still be tested in a browser.

---

## 🔌 API Overview

The backend exposes REST API endpoints for the application's features.

The following table illustrates the endpoint structure discussed during development. Confirm the actual registered routes in the backend before relying on this list.

| Module | Example Endpoint | Purpose |
|---|---|---|
| Authentication | `/api/auth/register` | Register a user |
| Authentication | `/api/auth/login` | Authenticate a user |
| Farms | `/api/farms` | Retrieve or create farm records |
| Crops | `/api/crops` | Retrieve or create crop records |
| Crops | `/api/crops/:id` | Access or delete a crop record |

### Example: Health Check

If the backend implements the health endpoint, access:

```text
http://localhost:8000/api/health
```

A successful response may look like:

```json
{
  "status": "ok",
  "service": "AgriTech API"
}
```

### Example: Registration Request

An illustrative registration request:

```http
POST /api/auth/register
Content-Type: application/json
```

Example response status:

```text
201 Created
```

The exact request fields, response structure, and authentication requirements depend on the implementation in the backend.

---

## 🧪 Testing

Test the application systematically after installation.

### Authentication
- Register a new user.
- Log in with valid credentials.
- Verify that invalid credentials are rejected.
- Test protected routes without authentication.
- Verify logout behavior.

### Farm Management
- Create a farm.
- Verify that it appears in the application.
- Refresh the page and confirm persistence.
- Test invalid or missing form values.

### Crop Management
- Add a crop to a registered farm.
- Verify crop details and growth stage.
- Update records if editing is implemented.
- Test deletion and its effect on stored data.

### Marketplace
- Check product listings.
- Verify product details.
- Test booking workflows if implemented.
- Confirm that invalid requests are handled correctly.

### Backend and Database
- Verify the database connection.
- Inspect API responses in Chrome DevTools.
- Confirm that successful writes persist in MongoDB.
- Check backend logs when a request fails.

---

## 🔐 Security Considerations

For a production-ready application:

- Hash user passwords before storing them.
- Validate and sanitize incoming request data.
- Protect private routes using appropriate authentication middleware.
- Enforce authorization checks on user-owned records.
- Keep JWT secrets and database credentials outside source code.
- Configure CORS to allow only trusted origins in production.
- Add rate limiting to authentication endpoints.
- Avoid exposing stack traces and internal server errors to users.
- Back up the database regularly.
- Use HTTPS for deployed environments.

Authentication alone is not sufficient: every private resource must also be checked for ownership and authorization.

---

## 🔮 Future Enhancements

Potential improvements include:

- Weather information and forecasts.
- Crop disease detection using computer vision.
- AI-assisted crop recommendations.
- Soil health and irrigation recommendations.
- Agricultural product marketplace enhancements.
- Booking and order tracking.
- Notifications for planting and harvesting schedules.
- Analytics and crop performance reports.
- Multilingual support for farmers.
- Mobile-friendly layouts and progressive web app support.

These are proposed enhancements, not claims that all these features are already implemented.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test the relevant workflows.
5. Commit your changes with descriptive messages.
6. Open a pull request.

Example:

```bash
git checkout -b feature/crop-management
git add .
git commit -m "Improve crop management"
git push origin feature/crop-management
```

---

## 📄 License

Until a license is added, do not assume that the project is available for unrestricted reuse.

---

**AgriTech — Smart Farming**

*Building practical digital solutions for agricultural management.*