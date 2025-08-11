import { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState('opportunities')
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const mockOpportunities = [
    {
      id: 1,
      title: '��️ City Hall Community Forum Setup',
      organization: 'Cincinnati City Government',
      description: 'Help prepare City Hall for upcoming community forums. Set up chairs, organize information booths, and assist with event logistics.',
      location: 'Cincinnati City Hall • 0.8 miles',
      timeCommitment: '3-4 hours',
      rewardRate: 2.5,
      priority: 'High Priority',
      category: 'Civic Engagement'
    },
    {
      id: 2,
      title: '📚 After-School Math Tutoring',
      organization: 'Cincinnati Public Schools',
      description: 'Provide one-on-one math support for middle school students preparing for state assessments.',
      location: 'Woodward High School • 1.2 miles',
      timeCommitment: '2-3 hours',
      rewardRate: 4.0,
      priority: 'High Priority',
      category: 'Education'
    }
  ]

  const mockMarketplace = [
    { id: 1, name: '🚌 Weekly Metro Pass', description: 'Unlimited Cincinnati Metro bus and streetcar rides for one week', cost: 18, category: 'Transportation' },
    { id: 2, name: '🅿️ Premium Downtown Parking', description: 'Reserved downtown parking space for one full day', cost: 12, category: 'Transportation' },
    { id: 3, name: '🏊 Recreation Center Access', description: 'Weekly access to city pools, gym, and fitness classes', cost: 15, category: 'Recreation' }
  ]

  const mockTransactions = [
    { id: 1, type: 'earn', description: '🏛️ City Hall Setup (4 hours)', amount: 10.0, date: '2 hours ago' },
    { id: 2, type: 'earn', description: '📚 Math Tutoring (3 hours)', amount: 12.0, date: '1 day ago' },
    { id: 3, type: 'spend', description: '🚌 Weekly Metro Pass', amount: -18.0, date: '2 days ago' }
  ]

  const simulateAction = () => {
    setShowSuccess(true)
    setSelectedOpportunity(null)
    setSelectedItem(null)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <>
      <Head>
        <title>HelpToken Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-4">
        {/* Success Notification */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-medium"
            >
              ✅ Success! Transaction recorded on blockchain 🎉
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-7xl mr-4">🤝</span>
              <div>
                <h1 className="text-6xl font-bold text-white mb-2">HelpToken</h1>
                <p className="text-2xl text-white opacity-90">Municipal Volunteer Cryptocurrency</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-3 inline-block">
              <span className="text-white font-semibold text-lg">🏛️ Cincinnati Pilot Program</span>
            </div>
          </motion.div>

          {/* Dashboard Cards - Exact YangCoin Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
          >
            {/* Balance Card - Purple Gradient */}
            <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Your Balance</h3>
              <div className="text-6xl font-bold mb-6">73.5 HELP</div>
              <p className="text-purple-100 mb-6 text-lg">Verified Community Impact Hours</p>
              <div className="bg-white bg-opacity-20 rounded-full h-4 mb-4 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
              <p className="text-sm text-purple-200">88% to Gold Status</p>
              <p className="text-xs text-purple-300 mt-1">12 HELP to next reward tier (85 HELP)</p>
            </div>

            {/* Impact Card - Pink Gradient */}
            <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Your City Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    73.5
                  </motion.div>
                  <div className="text-pink-100">Hours Served</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    8
                  </motion.div>
                  <div className="text-pink-100">Projects</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    247
                  </motion.div>
                  <div className="text-pink-100">Citizens Helped</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    #12
                  </motion.div>
                  <div className="text-pink-100">City Ranking</div>
                </div>
              </div>
            </div>

            {/* Municipal Program Card - Blue Gradient */}
            <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Municipal Program</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    2,847
                  </motion.div>
                  <div className="text-cyan-100">Active Volunteers</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    $124K
                  </motion.div>
                  <div className="text-cyan-100">Value Created</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    95%
                  </motion.div>
                  <div className="text-cyan-100">Success Rate</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    42
                  </motion.div>
                  <div className="text-cyan-100">Local Partners</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="border-b border-gray-200">
              <nav className="flex">
                {[
                  { id: 'opportunities', label: 'Volunteer Opportunities', icon: '❤️' },
                  { id: 'marketplace', label: 'Spend Tokens', icon: '🪙' },
                  { id: 'transactions', label: 'Transaction History', icon: '🕒' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-3 px-8 py-6 text-lg font-semibold transition-all duration-300 ${
                      selectedTab === tab.id
                        ? 'border-b-4 border-blue-500 text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-10">
              <AnimatePresence mode="wait">
                {selectedTab === 'opportunities' && (
                  <motion.div
                    key="opportunities"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-4xl font-bold mb-10 text-gray-800">🏛️ Available Volunteer Opportunities</h3>
                    <div className="space-y-8">
                      {mockOpportunities.map((opportunity, index) => (
                        <motion.div
                          key={opportunity.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-transparent hover:border-blue-400 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
                          onClick={() => setSelectedOpportunity(opportunity)}
                        >
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                <h4 className="text-2xl font-bold text-gray-800">{opportunity.title}</h4>
                                <span className="bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold">
                                  {opportunity.priority}
                                </span>
                              </div>
                              <p className="text-gray-600 text-lg mb-4 leading-relaxed">{opportunity.description}</p>
                              <div className="text-gray-500 space-y-2">
                                <div className="flex items-center gap-2">
                                  <span>📍</span>
                                  <span>{opportunity.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>🕒</span>
                                  <span>{opportunity.timeCommitment}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-8">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-xl mb-3">
                                +{opportunity.rewardRate} HELP/hr
                              </div>
                              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {opportunity.category}
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200">
                            <span className="text-blue-600 font-semibold text-lg">{opportunity.organization}</span>
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
                  >
                    <h3 className="text-4xl font-bold mb-10 text-gray-800">🏪 Spend Your HELP Tokens</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {mockMarketplace.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                          onClick={() => setSelectedItem(item)}
                        >
                          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                          <h4 className="text-xl font-bold mb-4 text-gray-800">{item.name}</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-green-600">{item.cost} HELP</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {item.category}
                            </span>
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
                  >
                    <h3 className="text-4xl font-bold mb-10 text-gray-800">📋 Recent Transactions</h3>
                    <div className="space-y-6">
                      {mockTransactions.map((transaction, index) => (
                        <motion.div
                          key={transaction.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-2xl hover:shadow-lg transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-4 h-4 rounded-full ${
                              transaction.type === 'earn' ? 'bg-green-500' : 'bg-orange-500'
                            }`}></div>
                            <div>
                              <div className="font-semibold text-lg text-gray-800">{transaction.description}</div>
                              <div className="text-gray-500">{transaction.date}</div>
                            </div>
                          </div>
                          <div className={`font-bold text-xl ${
                            transaction.type === 'earn' ? 'text-green-600' : 'text-orange-600'
                          }`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} HELP
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedOpportunity.title}</h3>
                <p className="text-gray-600 mb-6">{selectedOpportunity.description}</p>
                <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                  <div className="text-blue-800 space-y-2">
                    <div><strong>Reward:</strong> {selectedOpportunity.rewardRate} HELP per hour</div>
                    <div><strong>Time:</strong> {selectedOpportunity.timeCommitment}</div>
                    <div><strong>Location:</strong> {selectedOpportunity.location}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedOpportunity(null)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-2xl font-semibold hover:bg-gray-50"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={simulateAction}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700"
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
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedItem.name}</h3>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="bg-green-50 p-6 rounded-2xl mb-6">
                  <div className="text-green-800 space-y-2">
                    <div><strong>Cost:</strong> {selectedItem.cost} HELP tokens</div>
                    <div><strong>Your Balance:</strong> 73.5 HELP</div>
                    <div><strong>Provider:</strong> City of Cincinnati</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-2xl font-semibold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={simulateAction}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700"
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
