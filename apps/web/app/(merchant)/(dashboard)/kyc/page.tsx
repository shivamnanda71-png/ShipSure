"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Upload } from "lucide-react";

export default function Page() {
  const [userType, setUserType] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [tanDocType, setTanDocType] = useState("");

  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">KYC</h1>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  User Type <span className="text-red-500">*</span>
                </Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company">Company</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Company Type <span className="text-red-500">*</span>
                </Label>
                <Select value={companyType} onValueChange={setCompanyType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sole Proprietorship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sole">Sole Proprietorship</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="llp">LLP</SelectItem>
                    <SelectItem value="private">Private Limited</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Contact Person <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="" className="w-full" />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="Enter Name" className="w-full" />
              </div>
            </div>

            {/* GST No */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                GST No. (Optional)
              </Label>
              <Input
                placeholder="Enter 15 alphanumeric"
                className="w-full md:w-1/4"
              />
            </div>

            {/* Uploaded Documents Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Uploaded Documents
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pan Card Section */}
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">
                      Pan Card
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          PAN number <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter PAN Number" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter Name on Documents" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          DOB <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input placeholder="Enter DOB on Documents" />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-sm font-medium text-gray-700">
                            Photo (JPEG or PNG)
                          </Label>
                          <button className="text-blue-600 text-sm hover:underline">
                            View Samples
                          </button>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                          <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Aadhar Card Section */}
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">
                      Aadhar Card
                    </h3>
                    <div className="mb-4">
                      <Select
                        value={documentType}
                        onValueChange={setDocumentType}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Aadhar Card" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aadhar">Aadhar Card</SelectItem>
                          <SelectItem value="passport">Passport</SelectItem>
                          <SelectItem value="voter">Voter ID</SelectItem>
                          <SelectItem value="driving">
                            Driving License
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Number <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter Document Number" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Enter Name on Documents" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Front Image
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                          <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Back Image
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                          <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* TAN Number Section */}
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">
                      TAN Card
                    </h3>

                    <div className="mb-4">
                      <Select value={tanDocType} onValueChange={setTanDocType}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="TAN Number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tan">TAN Number</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          Name
                        </Label>
                        <Input placeholder="Enter Name on Documents" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          TAN Number
                        </Label>
                        <Input placeholder="Enter TAN Number" />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-2 block">
                          TAN Certificate (Only PDF)
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                          <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
