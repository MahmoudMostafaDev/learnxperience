import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-6xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login