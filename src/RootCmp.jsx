import React from 'react'
import { Route, Routes } from 'react-router'
import { ToyIndex } from './pages/ToyIndex'
import { ToyEdit } from './pages/ToyEdit'
import { ToyDetails } from './pages/ToyDetails'
import { HomePage } from './pages/HomePage'
import { UserMsg } from './cmps/UserMsg'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About'
import { ToyDashboard } from './pages/ToyDashboard'

export function App() {
  return (
    <main className="main-toy-app">
      <AppHeader />
      <Routes>
        <Route element={<ToyDetails />} path="/toy/details/:toyId" />
        <Route element={<ToyDashboard />} path="/dashboard" />
        <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
        <Route element={<ToyEdit />} path="/toy/edit" />
        <Route element={<ToyIndex />} path="/toy" />
        <Route element={<HomePage />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>

      <UserMsg />
    </main>
  )
}
