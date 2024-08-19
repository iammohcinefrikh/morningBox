"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ProfileDetails() {
  // State to manage form data
  const [profileData, setProfileData] = useState({
    fullName: "Jared Palmer",
    username: "@jaredpalmer",
    email: "jared.palmer@example.com",
    phoneNumber: "123-456-7890",
    profilePicture: "",
    addressLine1: "123 Main St",
    addressLine2: "",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    cardNumber: "**** **** **** 1234",
    cardExpiryDate: "12/23",
    cardCVV: "123",
    nameOnCard: "Jared Palmer",
    notes: "",
    preferences: "",
  });

  // Handler for form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handler for form submission (e.g., saving data)
  const handleSubmit = () => {
    console.log("Profile Data:", profileData);
    // Implement save functionality here (e.g., API call to update the profile)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Edit Profile Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={profileData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="profilePicture">Profile Picture</Label>
              <Input
                id="profilePicture"
                type="file"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="addressLine1">Address Line 1</Label>
              <Input
                id="addressLine1"
                value={profileData.addressLine1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="addressLine2">Address Line 2</Label>
              <Input
                id="addressLine2"
                value={profileData.addressLine2}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={profileData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="state">State/Province/Region</Label>
              <Input
                id="state"
                value={profileData.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="zipCode">Zip/Postal Code</Label>
              <Input
                id="zipCode"
                value={profileData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={profileData.country}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={profileData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="cardExpiryDate">Card Expiry Date</Label>
              <Input
                id="cardExpiryDate"
                value={profileData.cardExpiryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="cardCVV">Card CVV</Label>
              <Input
                id="cardCVV"
                value={profileData.cardCVV}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="nameOnCard">Name on Card</Label>
              <Input
                id="nameOnCard"
                value={profileData.nameOnCard}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={profileData.notes}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="preferences">Preferences</Label>
              <Textarea
                id="preferences"
                value={profileData.preferences}
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSubmit}>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
