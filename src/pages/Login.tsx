
import React from 'react';
import Logo from '@/components/layout/Logo';
import MacromexLogo from '@/components/layout/MacromexLogo';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-[150px] opacity-10 translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      {/* Header with Logos */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mb-16 px-6 z-10">
        <Logo />
        <MacromexLogo />
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-md mx-auto px-6 z-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8 text-opticomm-text">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
