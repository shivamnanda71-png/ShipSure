import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle } from "lucide-react";

export default function ShipmentDashboard() {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Welcome Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="text-6xl"></div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    Welcome <span className="text-blue-600">Shubham</span> ! 👋
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Hooray!! You&apso;re one step closer to dispatching your
                    shipment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configure Channel Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Configure Channel
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Connect multiple sales channels in one go.
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
                    Integrate Channel
                  </Button>
                </div>

                {/* Channel Icons */}
                <div>
                  <img
                    src="https://itl-dashboard-aws.s3.ap-south-1.amazonaws.com/my/theme3/assets/images/itl-new-user-dash-chnnl.svg"
                    alt="intergration"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Steps */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">
                Quick steps to be done to set up your account
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <span className="font-medium text-gray-700">Channel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">KYC</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="font-medium text-gray-700">Recharge</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Create Customized Tracking Page */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Create a customized tracking page
                </h2>
                <Button variant="link" className="text-blue-600">
                  Need help?
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Customize Menu
                      </h3>
                      <p className="text-sm text-gray-600">
                        Add menu and other details according to your brand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Customize Domain
                      </h3>
                      <p className="text-sm text-gray-600">
                        Connect track page with your domain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Need Help Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-purple-100">
                Milan is here to solve all your doubts reach out to him on
                7718888236
              </p>
            </CardContent>
          </Card>

          {/* Market Insights Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Want to get real time market insights?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join Our community of ecommerce brands!
              </p>

              {/* QR Code Placeholder */}
              <div className="w-32 h-32 mx-auto bg-gray-900 rounded-lg mb-4"></div>

              <p className="text-xs text-gray-500 mb-3">
                scan the QR to join or click on link below
              </p>
              <Button variant="link" className="text-blue-600 font-semibold">
                Join Now
              </Button>
            </CardContent>
          </Card>

          {/* Schedule Training Card */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Schedule Training
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Enter your details below. We will reach out to you.
              </p>
              <div className="flex gap-2">
                <Input placeholder="+91" className="flex-1" />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Call Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
