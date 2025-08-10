import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  MapPin, 
  Clock, 
  Users, 
  Coins, 
  Award,
  ChevronRight,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react'

// Mock data
const mockUser = {
  name: 'Demo Volunteer',
  balance: 73.5,
  totalHours: 89.5,
  totalProjects: 12,
  cityRanking: 8,
  peopleImpacted: 247
}

const mockOpportunities = [
  {
    id: 1,
    title: '🏛️ City Hall Community Forum Setup',
    organization: 'Cincinnati City Government',
    description: 'Help prepare City Hall for upcoming community forums. Set up chairs, organize information booths, and assist with event logistics.',
    location: 'Cincinnati City Hall',
    distance: '0.8 miles',
    rewardRate: 2.5,
    priority: 'high',
    timeCommitment: '3-4 hours',
    category: 'Civic Engagement'
  },
  {
    id: 2,
    title: '📚 After-School Math Tutoring',
    organization: 'Cincinnati Public Schools',
    description: 'Provide one-on-one math support for middle school students preparing for state assessments. Patient, encouraging volunteers needed.',
    location: 'Woodward High School',
    distance: '1.2 miles',
    rewardRate: 4.0,
    priority: 'high',
    timeCommitment: '2-3 hours',
    category: 'Education'
  },
  {
    id: 3,
    title: '🌳 Washington Park Trail Maintenance',
    organization: 'Cincinnati Parks Department',
    description: 'Join our team in maintaining hiking trails, removing debris, and improving park accessibility for all community members.',
    location: 'Washington Park',
    distance: '0.6 miles',
    rewardRate: 2.0,
    priority: 'medium',
    timeCommitment: '4-6 hours',
    category: 'Environment'
  },
  {
    id: 4,
    title: '👥 Senior Technology Workshop Assistant',
    organization: 'Clifton Community Center',
    description: 'Help seniors learn smartphone basics, video calling, and online safety. Patience and enthusiasm required!',
    location: 'Clifton Community Center',
    distance: '1.8 miles',
    rewardRate: 3.5,
    priority: 'medium',
    timeCommitment: '2 hours',
    category: 'Community Support'
  }
]

const mockMarketplace = [
  {
    id: 1,
    name: '🚌 Weekly Metro Pass',
    description: 'Unlimited Cincinnati Metro bus and streetcar rides for one week',
    cost: 18,
    category: 'Transportation',
    popularity: 'Most Popular'
  },
  {
    id: 2,
    name: '🅿️ Premium Downtown Parking',
    description: 'Reserved downtown parking space for one full day',
    cost: 12,
    category: 'Transportation',
    popularity: null
  },
  {
    id: 3,
    name: '🏊 Recreation Center Access',
    description: 'Weekly access to city pools, gym, and fitness classes',
    cost: 15,
    category: 'Recreation',
    popularity: null
  },
  {
    id: 4,
    name: '🦁 Cincinnati Zoo Discount',
    description: '50% off admission to Cincinnati Zoo & Botanical Garden',
    cost: 25,
    category: 'Entertainment',
    popularity: 'Great Value'
  },
  {
    id: 5,
    name: '📚 Library VIP Access',
    description: 'Extended borrowing, priority reservations, and workshop access',
    cost: 10,
    category: 'Education',
    popularity: null
  },
  {
    id: 6,
    name: '🏛️ Community Project Fund',
    description: 'Pool your tokens to fund neighborhood improvement initiatives',
    cost: 30,
    category: 'Community',
    popularity: 'High Impact'
  }
]

const mockTransactions = [
  { id: 1, type: 'earn', description: '🏛️ City Hall Setup (4 hours)', amount: 10.0, date: '2 hours ago' },
  { id: 2, type: 'earn', description: '📚 Math Tutoring (3 hours)', amount: 12.0, date: '1 day ago' },
  { id: 3, type: 'spend', description: '🚌 Weekly Metro Pass', amount: -18.0, date: '2 days ago' },
  { id: 4, type: 'earn', description: '🌳 Park Maintenance (5 hours)', amount: 10.0, date: '3 days ago' },
  { id: 5, type: 'spend', description: '🅿️ Downtown Parking', amount: -12.0, date: '1 week ago' }
]

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState('opportunities')
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleVolunteer = (opportunity) => {
    setSelectedOpportunity(opportunity)
  }

  const handlePurchase = (item) => {
    setSelectedItem(item)
  }

  const simulateVolunteerWork = () => {
    setShowSuccess(true)
    setSelectedOpportunity(null)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const simulatePurchase = () => {
    setShowSuccess(true)
    setSelectedItem(null)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <>
      <Head>
        <title>HelpToken Demo - Municipal Volunteer Cryptocurrency</title>
        <meta name="description" content="See how HelpToken rewards community volunteers with spendable cryptocurrency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Interactive Demo</span>
            <span className="text-purple-200">•</span>
            <span className="text-sm">Experience HelpToken without signing up</span>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🤝</div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">HelpToken</h1>
                  <p className="text-sm text-gray-600">Municipal Volunteer Crypto</p>
                </div>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg px-4 py-2">
                <div className="text-sm font-medium text-green-800">Demo Mode</div>
                <div className="text-xs text-green-600">Cincinnati Pilot</div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Success Notification */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
              >
                <Award className="w-6 h-6" />
                <span className="font-medium">Success! Transaction recorded on blockchain 🎉</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Earn Crypto for Helping Your City
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              Like earning tickets at Chuck E. Cheese, but for making your community better
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                🔗 Polygon Blockchain
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                🌱 Eco-Friendly
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                🏛️ Government Verified
              </div>
            </div>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 animate-pulse-slow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Your Balance</h3>
                <Coins className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{mockUser.balance} HELP</div>
              <p className="text-green-100 text-sm">Verified community impact hours</p>
              <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '74%' }}></div>
              </div>
              <p className="text-xs text-green-100 mt-2">74% to next reward tier</p>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Your Impact</h3>
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{mockUser.totalHours}</div>
                  <div className="text-xs text-gray-600">Hours Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{mockUser.totalProjects}</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{mockUser.peopleImpacted}</div>
                  <div className="text-xs text-gray-600">People Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">#{mockUser.cityRanking}</div>
                  <div className="text-xs text-gray-600">City Rank</div>
                </div>
              </div>
            </div>

            {/* City Stats */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Cincinnati Network</h3>
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Active Volunteers</span>
                  <span className="font-bold">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Value Created</span>
                  <span className="font-bold">$124K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Success Rate</span>
                  <span className="font-bold">95%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {[
                  { id: 'opportunities', label: 'Volunteer Opportunities', icon: Heart },
                  { id: 'marketplace', label: 'Spend Tokens', icon: Coins },
                  { id: 'transactions', label: 'Transaction History', icon: Clock }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                      selectedTab === tab.id
                        ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {selectedTab === 'opportunities' && (
                  <motion.div
                    key="opportunities"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-6 text-gray-800">🏛️ Available Volunteer Opportunities</h3>
                    <div className="space-y-4">
                      {mockOpportunities.map((opportunity) => (
                        <motion.div
                          key={opportunity.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: opportunity.id * 0.1 }}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 cursor-pointer"
                          onClick={() => handleVolunteer(opportunity)}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-semibold text-gray-800">{opportunity.title}</h4>
                                {opportunity.priority === 'high' && (
                                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">High Priority</span>
                                )}
                              </div>
                              <p className="text-gray-600 mb-3">{opportunity.description}</p>
                              <div className="flex items-center text-sm text-gray-500 space-x-4">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {opportunity.location} • {opportunity.distance}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {opportunity.timeCommitment}
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-2">
                                +{opportunity.rewardRate} HELP/hr
                              </div>
                              <div className="text-xs text-gray-500">{opportunity.category}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600 font-medium">{opportunity.organization}</span>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'marketplace' && (
                  <motion.div
                    key="marketplace"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-6 text-gray-800">🏪 Spend Your HELP Tokens</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockMarketplace.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: item.id * 0.1 }}
                          className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 cursor-pointer relative"
                          onClick={() => handlePurchase(item)}
                        >
                          {item.popularity && (
                            <div className="absolute -top-2 -right-2">
                              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                {item.popularity}
                              </span>
                            </div>
                          )}
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">{item.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-green-600">{item.cost} HELP</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'transactions' && (
                  <motion.div
                    key="transactions"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-6 text-gray-800">📋 Recent Transactions</h3>
                    <div className="space-y-3">
                      {mockTransactions.map((transaction) => (
                        <motion.div
                          key={transaction.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: transaction.id * 0.1 }}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${transaction.type === 'earn' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                            <div>
                              <div className="font-medium text-gray-800">{transaction.description}</div>
                              <div className="text-sm text-gray-500">{transaction.date}</div>
                            </div>
                          </div>
                          <div className={`font-bold ${transaction.type === 'earn' ? 'text-green-600' : 'text-orange-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} HELP
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-800">
                        <Zap className="w-5 h-5" />
                        <span className="font-medium">All transactions verified on Polygon blockchain</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">This is Just the Beginning</h3>
            <p className="text-lg mb-6 opacity-90">
              HelpToken is being built to work with city governments nationwide. 
              This demo shows what volunteering could look like in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-medium">💡 Inspired by Andrew Yang's Freedom Dividend</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <span className="font-medium">🎟️ Simple as earning arcade tickets</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {selectedOpportunity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedOpportunity(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold mb-4">{selectedOpportunity.title}</h3>
                <p className="text-gray-600 mb-4">{selectedOpportunity.description}</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-blue-800">
                    <div><strong>Reward:</strong> {selectedOpportunity.rewardRate} HELP per hour</div>
                    <div><strong>Time:</strong> {selectedOpportunity.timeCommitment}</div>
                    <div><strong>Location:</strong> {selectedOpportunity.location}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedOpportunity(null)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={simulateVolunteerWork}
                    className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    Start Volunteering
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold mb-4">{selectedItem.name}</h3>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-green-800">
                    <div><strong>Cost:</strong> {selectedItem.cost} HELP tokens</div>
                    <div><strong>Your Balance:</strong> {mockUser.balance} HELP</div>
                    <div><strong>Provider:</strong> City of Cincinnati</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={simulatePurchase}
                    className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    Redeem Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}