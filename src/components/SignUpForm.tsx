
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Check } from 'lucide-react';

// Define the maximum character count for text areas (Twitter-like)
const MAX_CHARS = 280;

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  whyJoin: z.string().max(MAX_CHARS, { 
    message: `Response must not exceed ${MAX_CHARS} characters.` 
  }).min(10, { message: 'Please provide at least 10 characters.' }),
  project: z.string().max(MAX_CHARS, { 
    message: `Response must not exceed ${MAX_CHARS} characters.` 
  }).min(10, { message: 'Please provide at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

interface SignUpFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ open, onOpenChange }) => {
  const [charCountWhyJoin, setCharCountWhyJoin] = useState(0);
  const [charCountProject, setCharCountProject] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whyJoin: '',
      project: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would handle the form submission, e.g., sending data to an API
    onOpenChange(false);
    // You could add a success toast here
  };

  const gradientLabelClass = "bg-gradient-to-r from-cyber to-nature bg-clip-text text-transparent font-medium";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyber to-nature bg-clip-text text-transparent">
            Join Our Community
          </DialogTitle>
          <DialogDescription>
            Be part of the movement bridging technology and sustainability.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`flex items-center gap-2 ${gradientLabelClass}`}>
                    <User className="h-4 w-4" /> Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`flex items-center gap-2 ${gradientLabelClass}`}>
                    <Mail className="h-4 w-4" /> Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whyJoin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={gradientLabelClass}>Why do you want to join us?</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea 
                        placeholder="Share your motivation and interest in our mission..."
                        className="resize-none min-h-[100px]"
                        maxLength={MAX_CHARS}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setCharCountWhyJoin(e.target.value.length);
                        }}
                      />
                      <span className={`absolute bottom-2 right-2 text-xs ${
                        charCountWhyJoin > MAX_CHARS * 0.9 
                          ? 'text-red-500' 
                          : 'text-gray-400'
                      }`}>
                        {charCountWhyJoin}/{MAX_CHARS}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={gradientLabelClass}>
                    Are you building a project or involved in a community that shares similar values?
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea 
                        placeholder="If yes, tell us about it. If no, share what you'd like to build..."
                        className="resize-none min-h-[120px]"
                        maxLength={MAX_CHARS}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setCharCountProject(e.target.value.length);
                        }}
                      />
                      <span className={`absolute bottom-2 right-2 text-xs ${
                        charCountProject > MAX_CHARS * 0.9 
                          ? 'text-red-500' 
                          : 'text-gray-400'
                      }`}>
                        {charCountProject}/{MAX_CHARS}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyber to-nature hover:opacity-90"
              >
                <Check className="mr-2 h-4 w-4" /> Submit Application
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpForm;
