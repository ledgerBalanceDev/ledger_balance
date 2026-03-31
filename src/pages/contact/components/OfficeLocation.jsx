import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocation = () => {
  const officeInfo = {
    address: "123 Financial District",
    city: "New York, NY 10004",
    phone: "(555) 123-4567",
    email: "hello@ledgerbalance.com",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" }
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Office Information */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Visit Our Office
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Located in the heart of the Financial District, our office is easily accessible and designed to provide a comfortable environment for financial consultations.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-text-secondary">
                    {officeInfo?.address}<br />
                    {officeInfo?.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-text-secondary">{officeInfo?.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-text-secondary">{officeInfo?.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                  <div className="space-y-1">
                    {officeInfo?.hours?.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-text-secondary">{schedule?.day}</span>
                        <span className="text-foreground font-medium">{schedule?.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Visitor Information
              </h3>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Free parking available in building garage</li>
                <li>• Wheelchair accessible entrance and facilities</li>
                <li>• Conference rooms available for extended consultations</li>
                <li>• Please bring relevant financial documents for your appointment</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl shadow-brand overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Ledger Balance Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7074,-74.0113&z=16&output=embed"
                  className="border-0"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Getting Here</h3>
                <div className="space-y-2 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Icon name="Train" size={16} className="text-primary" />
                    <span>2 blocks from Wall St Station (4,5,6 trains)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} className="text-primary" />
                    <span>Valet parking available ($15/hour)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Bus" size={16} className="text-primary" />
                    <span>Multiple bus routes nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;