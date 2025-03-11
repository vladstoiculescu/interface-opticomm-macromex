
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const LoginForm = () => {
  const [email, setEmail] = useState('viviana.iacob@macromex.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // Simulate login process
    toast.success('Successfully logged in!');
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md animate-fadeIn">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm text-opticomm-text">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="neo-input w-full"
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm text-opticomm-text">
            Password
          </label>
          <a href="#" className="text-xs text-opticomm-blue hover:underline">
            Forgot password
          </a>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="neo-input w-full pr-10"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-opticomm-muted"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            className="data-[state=checked]:bg-opticomm-blue data-[state=checked]:border-opticomm-blue"
          />
          <label
            htmlFor="remember"
            className="text-sm text-opticomm-text cursor-pointer"
          >
            Remember me
          </label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-opticomm-blue to-blue-500 hover:opacity-90 text-white font-medium py-2 rounded transition-all"
      >
        Sign In
      </Button>

      <div className="text-center text-sm text-opticomm-muted">
        Don't have an account yet?{' '}
        <a href="#" className="text-opticomm-blue hover:underline">
          Sign up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
