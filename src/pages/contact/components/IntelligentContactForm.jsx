import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const IntelligentContactForm = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const inquiryOptions = [
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'bookkeeping', label: 'Bookkeeping Services' },
    { value: 'tax-planning', label: 'Tax Planning & Preparation' },
    { value: 'business-setup', label: 'New Business Setup' },
    { value: 'financial-analysis', label: 'Financial Analysis' },
    { value: 'payroll', label: 'Payroll Management' },
    { value: 'other', label: 'Other Services' }
  ];

  const businessSizeOptions = [
    { value: 'startup', label: 'Startup (0-5 employees)' },
    { value: 'small', label: 'Small Business (6-25 employees)' },
    { value: 'medium', label: 'Medium Business (26-100 employees)' },
    { value: 'large', label: 'Large Business (100+ employees)' }
  ];

  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate (Within 24 hours)' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'planning', label: 'Future Planning' }
  ];

  const handleInquiryChange = (value) => {
    setInquiryType(value);
    setValue('inquiryType', value);
    setShowAdditionalFields(['consultation', 'business-setup', 'financial-analysis']?.includes(value));
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you within 2 hours during business hours.');
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tell Us About Your Needs
            </h2>
            <p className="text-lg text-text-secondary">
              Our intelligent form adapts to your specific requirements, ensuring we connect you with the right expertise.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-brand p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  error={errors?.firstName?.message}
                  {...register('firstName', { 
                    required: 'First name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                />
                
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  error={errors?.lastName?.message}
                  {...register('lastName', { 
                    required: 'Last name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  error={errors?.email?.message}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  error={errors?.phone?.message}
                  {...register('phone', {
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                />
              </div>

              <Input
                label="Company Name"
                type="text"
                placeholder="Your business name"
                error={errors?.company?.message}
                {...register('company')}
              />

              {/* Inquiry Type */}
              <Select
                label="What can we help you with?"
                placeholder="Select your primary need"
                options={inquiryOptions}
                value={inquiryType}
                onChange={handleInquiryChange}
                required
                error={errors?.inquiryType?.message}
              />

              {/* Conditional Fields */}
              {showAdditionalFields && (
                <div className="space-y-6 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    Additional Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Business Size"
                      placeholder="Select your business size"
                      options={businessSizeOptions}
                      {...register('businessSize')}
                    />
                    
                    <Select
                      label="Timeline"
                      placeholder="When do you need assistance?"
                      options={urgencyOptions}
                      {...register('urgency')}
                    />
                  </div>

                  <Input
                    label="Current Annual Revenue (Optional)"
                    type="text"
                    placeholder="e.g., $500K, $2M, etc."
                    description="This helps us understand your business scale"
                    {...register('revenue')}
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                  <span className="text-error ml-1">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your specific needs, challenges, or questions..."
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  {...register('message', { 
                    required: 'Please provide details about your needs',
                    minLength: { value: 20, message: 'Please provide at least 20 characters' }
                  })}
                />
                {errors?.message && (
                  <p className="mt-1 text-sm text-error">{errors?.message?.message}</p>
                )}
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Communication Preferences</h3>
                
                <div className="space-y-3">
                  <Checkbox
                    label="I prefer to be contacted by phone"
                    {...register('preferPhone')}
                  />
                  
                  <Checkbox
                    label="I'm interested in scheduling a video consultation"
                    {...register('preferVideo')}
                  />
                  
                  <Checkbox
                    label="Send me updates about tax law changes and financial tips"
                    {...register('newsletter')}
                  />
                </div>
              </div>

              {/* Terms */}
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                required
                error={errors?.terms?.message}
                {...register('terms', { required: 'You must agree to the terms' })}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  iconName="Send"
                  iconPosition="right"
                >
                  Send My Inquiry
                </Button>
                
                <p className="text-center text-sm text-text-secondary mt-4">
                  We typically respond within 2 hours during business hours (Mon-Fri 8AM-6PM EST)
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentContactForm;