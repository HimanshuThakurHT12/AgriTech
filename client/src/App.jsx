import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import AuthPage from './pages/AuthPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Farms from './pages/Farms.jsx';
import Crops from './pages/Crops.jsx';
import Products from './pages/Products.jsx';
import Bookings from './pages/Bookings.jsx';
import Weather from './pages/Weather.jsx';
import CropGuide from './pages/CropGuide.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';
export default function App() { return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/login" element={<AuthPage mode="login"/>}/><Route path="/register" element={<AuthPage mode="register"/>}/><Route path="/crops-info" element={<CropGuide/>}/><Route path="/weather" element={<Weather/>}/><Route path="/products" element={<Products/>}/><Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/><Route path="/farms" element={<ProtectedRoute><Farms/></ProtectedRoute>}/><Route path="/crops" element={<ProtectedRoute><Crops/></ProtectedRoute>}/><Route path="/bookings" element={<ProtectedRoute><Bookings/></ProtectedRoute>}/><Route path="/admin" element={<ProtectedRoute admin><Admin/></ProtectedRoute>}/><Route path="/home" element={<Navigate to="/" replace/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>; }
