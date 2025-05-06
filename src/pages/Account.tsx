
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';

const Account = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful", {
        description: "Welcome back to MH Store!"
      });
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful", {
        description: "Your account has been created successfully!"
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 mt-20">
        <SectionHeading 
          title="My Account" 
          subtitle="Login or register to manage your account"
        />
        
        <div className="mt-8 max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Login to Your Account</h3>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <Input id="password" type="password" placeholder="Password" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a href="#" className="text-mh-black hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-mh-pink hover:bg-mh-pink/90" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="register" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                      <Input id="firstName" placeholder="First Name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                      <Input id="lastName" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="registerEmail" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="registerEmail" type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <Input id="phone" placeholder="Phone" />
                  </div>
                  <div>
                    <label htmlFor="registerPassword" className="block text-sm font-medium mb-1">Password</label>
                    <Input id="registerPassword" type="password" placeholder="Password" required />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" required />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-mh-pink hover:bg-mh-pink/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Register"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
