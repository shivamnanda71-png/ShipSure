import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Paperclip, Send, MessageCircle } from 'lucide-react';

export default function AIIntegration() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          In built <span className="text-blue-500">AI Integration</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto">
          With AI booming each passing day, we&apso;ve made sure that we integrate AI the best way we can, that is embedding it at meaningless places.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat Feature */}
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[280px] flex flex-col justify-between">
              {/* Chat messages */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm inline-block">
                  <p className="text-sm font-medium">Hello, Nice</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    Welcome to LiveChat I was made with Pick a topic from the list or type down a question!
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-400 text-white rounded-lg px-4 py-2 shadow-sm">
                    <p className="text-sm">Welcome</p>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="mt-4 bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Write a message" 
                  className="flex-1 text-sm outline-none text-gray-400"
                  disabled
                />
                <Paperclip className="w-5 h-5 text-gray-400" />
                <Send className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Chat with your calls</h3>
              <p className="text-gray-600 text-sm">
                It makes no sense but we have it here. Use it the way you want it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Feature */}
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[280px] flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-1">$12,000</h2>
              <p className="text-gray-500 text-sm mb-6">Total Balance</p>
              
              {/* Credit Card */}
              <div className="w-full max-w-[280px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="mb-8">
                  <div className="w-12 h-8 bg-blue-300 bg-opacity-40 rounded"></div>
                </div>
                <div className="mb-4 tracking-wider text-lg">
                  **** **** **** 2834
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>Credit Card</span>
                  <span>•</span>
                  <span>Visa</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Easy payments</h3>
              <p className="text-gray-600 text-sm">
                We accept all kinds of cards. We make sure you get money whichever way possible.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Feature */}
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6 min-h-[280px]">
              {/* Team avatars */}
              <div className="flex items-center justify-between mb-6">
                <button className="text-blue-400 text-sm font-medium">+ Invite</button>
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-600 border-2 border-white"></div>
                  <div className="w-9 h-9 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    +2
                  </div>
                </div>
              </div>

              {/* Task Card */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="mb-3">
                  <span className="inline-block bg-blue-400 text-white text-xs font-medium px-3 py-1 rounded">
                    High
                  </span>
                </div>
                <h4 className="font-bold mb-2">Research</h4>
                <p className="text-gray-600 text-sm mb-4">
                  User research helps you to create an optimal product for users.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      10 comments
                    </span>
                    <span className="flex items-center gap-1">
                      📎 3 files
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Real-time data Insights</h3>
              <p className="text-gray-600 text-sm">
                With our state of the art support of team members, invite your team into the software.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}