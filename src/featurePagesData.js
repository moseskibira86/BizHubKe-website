// Dedicated Feature Detail Pages for BizHubKE
// Supporting deep-dive views for each of the 5 "Solve Your Biggest Business Challenges"

export const FEATURE_PAGES_DATA = {
  "cash-flow-finance": {
    id: "cash-flow-finance",
    challengeNumber: 1,
    route: "/features/cash-flow-finance",
    challengeId: "cash-flow",
    title: "1. Cash Flow & Finance",
    shortTitle: "Cash Flow & Finance",
    subtitle: "Never guess where your business money goes",
    description: "Separate personal finances from your business. Auto-reconcile M-Pesa Buy Goods Till, Paybill statements, and bank deposits into clear daily profit & loss views.",
    highlights: [
      "M-Pesa Till & Paybill sync",
      "Real-time daily profit tracker",
      "Track unpaid customer debt"
    ],
    badgeText: "CHALLENGE #1 • CASH FLOW & FINANCE",
    tagline: "Empowering Kenyan Entrepreneurs with Total Real-Time Financial Visibility",
    detailedOverview: "In Kenya, cash flow management is the lifeblood of retail, wholesale, and service enterprises. Running a business through personal M-Pesa lines or manual paper ledger books frequently obscures true profit margins, causes accidental inventory stockouts, and leads to uncollected customer debts. BizHubKE bridges this gap with direct M-Pesa statement reconciliation, automated float monitoring, and instant profit calculations tuned for Kenyan Shillings (KSh).",
    keyCapabilities: [
      {
        title: "Automated M-Pesa Till & Paybill Reconciliation",
        desc: "Ingest and categorize M-Pesa transactions automatically. Reconcile customer reference numbers, till balances, and withdrawal transaction charges without manual calculator math."
      },
      {
        title: "Real-Time Daily Profit & Loss (P&L)",
        desc: "Instantly see gross revenue, cost of goods sold (COGS), operating expenses (rent, electricity, casual labor), and net profit for today, this week, or this month."
      },
      {
        title: "Customer Debt Ledger & Friendly Reminders",
        desc: "Track customer credit (deni) with due dates. Generate polite, automated WhatsApp reminder messages with direct Paybill or Till payment details."
      },
      {
        title: "Separate Personal & Business Float",
        desc: "Keep business earnings insulated from personal household withdrawals. Maintain clear records for audit readiness and tax deductions."
      }
    ],
    screenshot: {
      type: "cash-flow",
      title: "Kilimani Fresh Supplies & Retail • M-Pesa Cash Flow Command",
      stats: [
        { label: "Today's Net Cash Inflow", value: "KSh 48,250", change: "+14.2% vs yesterday", status: "positive" },
        { label: "Active Till & Paybill Balance", value: "KSh 142,800", change: "Safaricom Live Sync", status: "neutral" },
        { label: "Outstanding Customer Debt", value: "KSh 18,400", change: "3 accounts due today", status: "warning" },
        { label: "Estimated Daily Net Margin", value: "31.8%", change: "+2.4% vs last week", status: "positive" }
      ],
      mockupRows: [
        { desc: "M-Pesa Buy Goods • Till 5849201", time: "10:42 AM", ref: "SJH7892KL", amount: "+KSh 4,800", badge: "Auto-Reconciled", color: "emerald" },
        { desc: "Paybill 400200 • Invoice #INV-1092", time: "09:15 AM", ref: "SJH6710MN", amount: "+KSh 12,500", badge: "Cleared", color: "emerald" },
        { desc: "Supplier Restock • KCC Dairy Depot", time: "08:30 AM", ref: "EXP-8891", amount: "-KSh 16,200", badge: "Expense Logged", color: "amber" },
        { desc: "Customer Credit Payment • Mama Ryan", time: "Yesterday", ref: "SJG5521OP", amount: "+KSh 3,200", badge: "Debt Settled", color: "blue" }
      ]
    },
    workflowSteps: [
      { step: "01", title: "Connect Your Channels", desc: "Link your Safaricom M-Pesa Buy Goods Till, Paybill, or bank statement logs in seconds." },
      { step: "02", title: "Capture Sales & Expenses", desc: "Record cash and mobile payments in 5 seconds from smartphone, tablet, or PC." },
      { step: "03", title: "Automate Daily Reconciliation", desc: "BizHubKE automatically pairs incoming payments with customer orders and issues receipts." },
      { step: "04", title: "Review Real Margins", desc: "Wake up to accurate daily profit numbers and know your financial health before spending." }
    ],
    disclaimer: null
  },

  "tax-compliance": {
    id: "tax-compliance",
    challengeNumber: 2,
    route: "/features/tax-compliance",
    challengeId: "tax-compliance",
    title: "2. Tax & Compliance",
    shortTitle: "Tax & Compliance",
    subtitle: "Eliminate the fear of KRA penalties & audit notices",
    description: "Generate valid electronic tax invoices (eTIMS) straight from your phone or laptop. Auto-calculate Turnover Tax (TOT 3%), VAT (16%), and track county permit renewals.",
    highlights: [
      "eTIMS compliant digital receipts",
      "3% Turnover Tax calculation",
      "Single Business Permit alerts"
    ],
    badgeText: "CHALLENGE #2 • TAX & COMPLIANCE",
    tagline: "Simplified, Stress-Free KRA eTIMS Invoicing & County Statutory Filing",
    detailedOverview: "Kenyan tax compliance is essential for SME longevity, yet navigating KRA's electronic Tax Invoice Management System (eTIMS) and annual county Single Business Permits often intimidates business owners. BizHubKE democratizes compliance: create QR-coded eTIMS-ready receipts on the fly, accurately compute 3% Turnover Tax (TOT) for qualifying small businesses, estimate standard 16% VAT, and receive automated reminders well before Nairobi or County Government inspection deadlines.",
    keyCapabilities: [
      {
        title: "eTIMS-Ready Digital Receipts & QR Invoicing",
        desc: "Generate compliant electronic invoices featuring buyer PIN fields, Control Unit Numbers, and verifiable verification QR stamps ready for KRA validation."
      },
      {
        title: "Turnover Tax (TOT 3%) Automated Computation",
        desc: "Designed for Kenyan businesses with annual turnover between KSh 1M and KSh 25M. The system calculates your monthly 3% TOT liability automatically by the 20th."
      },
      {
        title: "Value Added Tax (16% VAT) Breakdown",
        desc: "For VAT-registered entities, keep input VAT and output VAT cleanly segregated so monthly VAT return submissions take minutes instead of days."
      },
      {
        title: "County Single Business Permit & Fire Certificate Alerts",
        desc: "Never get locked out or fined by county kanjo officers. Store permit expiration dates and receive timely calendar reminders 30, 14, and 3 days before renewal."
      }
    ],
    screenshot: {
      type: "tax-compliance",
      title: "KRA eTIMS & County Statutory Compliance Dashboard",
      stats: [
        { label: "Current Month TOT (3%) Liability", value: "KSh 9,744", change: "Due on 20th of Month", status: "neutral" },
        { label: "eTIMS Verified Receipts Issued", value: "318 Receipts", change: "100% Transmission Rate", status: "positive" },
        { label: "County Permit Status", value: "Valid (Active)", change: "Renewal in 84 Days", status: "positive" },
        { label: "Estimated VAT Output (16%)", value: "KSh 51,968", change: "Input Credit KSh 34,200", status: "neutral" }
      ],
      mockupRows: [
        { desc: "eTIMS Receipt #KR-2026-9901", time: "11:20 AM", ref: "PIN: P051982341M", amount: "KSh 14,500 (VAT 16%)", badge: "eTIMS Validated", color: "emerald" },
        { desc: "Monthly TOT 3% Estimate Log", time: "Yesterday", ref: "Period: Current Month", amount: "Tax: KSh 9,744", badge: "Calculated", color: "amber" },
        { desc: "Unified County Business Permit", time: "Nairobi City County", ref: "BP-NBI-89421", amount: "Valid Thru Dec 2026", badge: "Compliant", color: "blue" },
        { desc: "KRA Tax Clearance Certificate (TCC)", time: "PIN Linked", ref: "TCC-2026-OK", amount: "Valid Status", badge: "Good Standing", color: "emerald" }
      ]
    },
    workflowSteps: [
      { step: "01", title: "Enter Your KRA PIN & Business Details", desc: "Configure your business tax PIN and choose Turnover Tax (3%) or VAT (16%) regime." },
      { step: "02", title: "Issue Compliant Receipts", desc: "Every cash, card, or M-Pesa sale formats automatically with required eTIMS receipt markers." },
      { step: "03", title: "Review Pre-Computed Returns", desc: "At month end, export structured tax schedules ready for direct filing on the KRA iTax portal." },
      { step: "04", title: "Rest Easy Without Penalty Fears", desc: "Avoid the KSh 10,000 late filing penalty or KSh 100,000 non-compliance fines with proactive alerts." }
    ],
    disclaimer: "BizHubKE provides business information and workflow tools and does not replace professional tax or legal advice."
  },

  "inventory-operations": {
    id: "inventory-operations",
    challengeNumber: 3,
    route: "/features/inventory-operations",
    challengeId: "inventory-ops",
    title: "3. Inventory & Operations",
    shortTitle: "Inventory & Operations",
    subtitle: "Stop dead stock, theft, and stockout panics",
    description: "Real-time inventory countdown with smart reorder thresholds. Receive instant alerts on your phone when fast-moving items are low before you lose a customer.",
    highlights: [
      "Automated reorder point alerts",
      "Stock shrinkage & cost tracking",
      "Multi-category catalog management"
    ],
    badgeText: "CHALLENGE #3 • INVENTORY & OPERATIONS",
    tagline: "Real-Time Stock Tracking, Wastage Prevention, & Fast Reordering",
    detailedOverview: "Stockouts mean lost revenue, while overstocking traps your scarce working capital in slow-moving items on dusty shelves. In Kenya's fast-moving retail and distribution sectors, stock shrinkage and unrecorded discrepancies erode net profits silently. BizHubKE's Inventory & Operations engine delivers instant countdowns upon every completed sale, triggers reorder threshold alerts before shelves empty, and highlights your highest-margin product lines.",
    keyCapabilities: [
      {
        title: "Instant Stock Countdown on Every Sale",
        desc: "Whether sold via M-Pesa Till or cash, stock levels decrement immediately in real time across multiple branches, shelves, or stock rooms."
      },
      {
        title: "Smart Reorder Level & Supplier Alerting",
        desc: "Set minimum threshold levels per item. Get proactive dashboard and phone notifications when fast-moving stock hits reorder levels."
      },
      {
        title: "Shrinkage, Damage & Spoilage Auditing",
        desc: "Log damaged goods, expired products, or unverified discrepancies. Track shrinkage percentages and preserve inventory accountability among staff."
      },
      {
        title: "Batch Expiry & Unit Cost Margin Tracking",
        desc: "Record unit acquisition costs to preserve minimum 25-40% markups. Track batch expiry dates for perishables, dairy, pharmaceuticals, and FMCG."
      }
    ],
    screenshot: {
      type: "inventory-ops",
      title: "Warehouse & Storefront Stock Management Console",
      stats: [
        { label: "Active Catalog Items", value: "486 SKUs", change: "12 Added This Month", status: "neutral" },
        { label: "Total Inventory Valuation", value: "KSh 1,280,400", change: "Cost Price Basis", status: "positive" },
        { label: "Items Below Reorder Threshold", value: "4 Products", change: "Action Needed Today", status: "warning" },
        { label: "Monthly Shrinkage / Waste Rate", value: "0.4%", change: "-1.8% vs benchmark", status: "positive" }
      ],
      mockupRows: [
        { desc: "Unga wa Dola Premium Maize Flour 2kg", time: "Shelf A3", ref: "Stock: 14 units (Min: 20)", amount: "Reorder Alert Triggered", badge: "Low Stock Alert", color: "amber" },
        { desc: "Brookside Fresh Milk 500ml", time: "Chiller 1", ref: "Stock: 48 units (Min: 15)", amount: "Optimal Stock Level", badge: "In Stock", color: "emerald" },
        { desc: "Bidco Golden Fry Cooking Oil 3L", time: "Shelf B2", ref: "Stock: 28 units (Min: 10)", amount: "Fast Moving • Margin 24%", badge: "High Velocity", color: "blue" },
        { desc: "Dawaat Basmati Rice 5kg Pack", time: "Shelf C1", ref: "Stock: 35 units (Min: 8)", amount: "Supplier: Alpha Wholesalers", badge: "Well Stocked", color: "emerald" }
      ]
    },
    workflowSteps: [
      { step: "01", title: "Add Products & Set Buying Prices", desc: "Upload or add your inventory catalog with barcodes, SKU names, cost price, and retail price." },
      { step: "02", title: "Assign Minimum Reorder Points", desc: "Tell BizHubKE the minimum quantity you need before triggering restock alerts." },
      { step: "03", title: "Sell with Automated Decrements", desc: "Every transaction recorded at checkout automatically deducts from your stock count." },
      { step: "04", title: "Perform Fast Weekly Stock Audits", desc: "Count physical stock against system numbers to eliminate staff theft and shrinkage." }
    ],
    disclaimer: null
  },

  "customers-whatsapp-crm": {
    id: "customers-whatsapp-crm",
    challengeNumber: 4,
    route: "/features/customers-whatsapp-crm",
    challengeId: "customers-crm",
    title: "4. Customers & WhatsApp CRM",
    shortTitle: "Customers & WhatsApp CRM",
    subtitle: "Turn casual shoppers into devoted weekly buyers",
    description: "Kenyan commerce lives on WhatsApp. Send elegant PDF invoices, payment receipts, and friendly payment reminders with direct 1-click WhatsApp messaging.",
    highlights: [
      "Click-to-chat WhatsApp invoices",
      "Customer purchase history logs",
      "Personalized payment reminders"
    ],
    badgeText: "CHALLENGE #4 • CUSTOMERS & WHATSAPP CRM",
    tagline: "Connecting Directly with Kenyan Buyers on the Channel They Use Daily",
    detailedOverview: "Over 90% of business-to-consumer and B2B communication in Kenya takes place on WhatsApp. Email invoices often go unread for days, and SMS messages lack interactive branding. BizHubKE's WhatsApp CRM empowers you to send professional PDF receipts, dispatch friendly payment reminders, log purchase preferences, and broadcast seasonal promotions straight to your customers' WhatsApp chats with a single tap.",
    keyCapabilities: [
      {
        title: "1-Click WhatsApp Invoices & PDF Receipts",
        desc: "Generate professional branded receipts with your logo, business PIN, and M-Pesa confirmation codes, dispatched straight into the customer's WhatsApp chat."
      },
      {
        title: "Gentle Automated Payment Reminders",
        desc: "Maintain warm customer relationships with pre-formatted polite Swahili & English payment reminders for credit accounts, including your M-Pesa Till number."
      },
      {
        title: "Customer Directory & VIP Loyalty History",
        desc: "See every customer's total spend, favorite items, and date of last purchase. Identify your top 20% high-value repeat buyers and reward them."
      },
      {
        title: "Seasonal Offers & Stock Arrival Broadcasts",
        desc: "Notify targeted customer segments when fresh shipments arrive or holiday discounts launch, driving immediate repeat sales."
      }
    ],
    screenshot: {
      type: "customers-crm",
      title: "WhatsApp Engagement & Customer Relationship Hub",
      stats: [
        { label: "Registered Customer Profiles", value: "642 Contacts", change: "+48 Added This Month", status: "neutral" },
        { label: "WhatsApp Receipts Dispatched", value: "894 Sent", change: "98% Read Rate within 5m", status: "positive" },
        { label: "Repeat Customer Rate", value: "64.2%", change: "+8.6% vs last quarter", status: "positive" },
        { label: "Recovered Credit via Reminders", value: "KSh 76,500", change: "Avg 2.1 days turnaround", status: "positive" }
      ],
      mockupRows: [
        { desc: "Wanjiku Enterprises • Invoiced KSh 24,000", time: "WhatsApp Delivered", ref: "+254 722 ••• 419", amount: "PDF Receipt Sent", badge: "Receipt Shared", color: "emerald" },
        { desc: "Credit Due Reminder • Omondi Construction", time: "Due: 2 Days Ago", ref: "+254 733 ••• 882", amount: "Debt: KSh 12,500", badge: "1-Click Prompt", color: "amber" },
        { desc: "VIP Repeat Customer • Dr. Amina Hassan", time: "Last Visit: Today", ref: "Tier: Gold VIP", amount: "Lifetime: KSh 186,000", badge: "Top 5% Buyer", color: "blue" },
        { desc: "Fresh Restock Broadcast Message", time: "Dispatched to 120 buyers", ref: "Campaign: Weekend Offer", amount: "18 Inbound Orders", badge: "High Engagement", color: "emerald" }
      ]
    },
    workflowSteps: [
      { step: "01", title: "Save Customer Phone & Name", desc: "Capture phone numbers during checkout to automatically build your business contact list." },
      { step: "02", title: "Tap to Share Receipts on WhatsApp", desc: "No manual typing needed: click 'Send via WhatsApp' to open a pre-filled message with PDF invoice." },
      { step: "03", title: "Track Who Owes Money & Follow Up", desc: "Filter customers by outstanding debt and trigger personalized payment reminder templates." },
      { step: "04", title: "Drive Predictable Repeat Purchases", desc: "Send targeted messages when customers haven't purchased in 30 days to win them back." }
    ],
    disclaimer: null
  },

  "business-intelligence-growth": {
    id: "business-intelligence-growth",
    challengeNumber: 5,
    route: "/features/business-intelligence-growth",
    challengeId: "intelligence-growth",
    title: "5. Business Intelligence & Growth",
    shortTitle: "Business Intelligence & Growth",
    subtitle: "Understand your numbers and access SME capital",
    description: "Generate audited financial statements that Kenyan banks and SACCOs accept for loans. Monitor your Kenyan Business Health Score to know where to improve.",
    highlights: [
      "Kenyan Business Health Score (0-100)",
      "Bank-ready financial exports",
      "Top-selling margin analytics"
    ],
    badgeText: "CHALLENGE #5 • BUSINESS INTELLIGENCE & GROWTH",
    tagline: "Turn Daily Operational Data Into Bankable Growth & SME Capital",
    detailedOverview: "Many Kenyan businesses generate healthy revenues but struggle to secure financing from commercial banks, microfinance institutions, or SACCOs because they lack structured bookkeeping records and verifiable statements. BizHubKE's Business Intelligence engine transforms everyday transactions into audit-grade balance sheets, cash flow statements, and our proprietary Kenyan Business Health Score (0-100)—opening doors to SME working capital and asset financing.",
    keyCapabilities: [
      {
        title: "Kenyan Biashara Health Score (0-100)",
        desc: "An intelligent assessment measuring gross margin health, inventory turnover speed, debtor collection efficiency, and revenue consistency."
      },
      {
        title: "Bank & SACCO-Ready Financial Statement Exports",
        desc: "Export clean Profit & Loss statements, Cash Flow summaries, and Balance Sheets in PDF or Excel formatted to Kenyan bank underwriting standards."
      },
      {
        title: "Top-Selling Margin & Profitability Breakdown",
        desc: "Identify which 20% of your products drive 80% of your net profits, and spot low-margin loss-leaders that are draining your working cash."
      },
      {
        title: "Revenue Forecasting & Seasonal Trend Predictions",
        desc: "Plan ahead for back-to-school rushes, Christmas shopping surges, and end-of-month paydays with predictive sales modeling."
      }
    ],
    screenshot: {
      type: "intelligence-growth",
      title: "Executive Business Health & Capital Readiness Center",
      stats: [
        { label: "Overall Biashara Health Score", value: "88 / 100", change: "EXCELLENT • Bank Ready", status: "positive" },
        { label: "Estimated 6-Month Gross Revenue", value: "KSh 2,180,000", change: "+22.4% Annualized Growth", status: "positive" },
        { label: "Average Net Profit Margin", value: "24.6%", change: "+3.2% vs industry avg", status: "positive" },
        { label: "SACCO / Bank Loan Qualification", value: "Pre-Qualified", change: "Tier 1 Working Capital", status: "positive" }
      ],
      mockupRows: [
        { desc: "Bank-Ready Annual Financial Statement Export", time: "Generated Today", ref: "KCB & Equity Format", amount: "Full P&L + Balance Sheet", badge: "PDF Ready", color: "emerald" },
        { desc: "High Margin Contributor: Organic Dry Foods", time: "Category Analysis", ref: "Gross Margin: 38.4%", amount: "+KSh 142,000 Net Profit", badge: "Top Performer", color: "blue" },
        { desc: "Debtor Turnover Cycle Speed", time: "Working Capital Health", ref: "Average Collection: 4.2 Days", amount: "Healthy Cash Velocity", badge: "Optimal", color: "emerald" },
        { desc: "Seasonal Growth Forecast • Q4 Outlook", time: "Predictive Analytics", ref: "Projected Sales: +18%", amount: "Restock Advice Ready", badge: "AI Modeled", color: "indigo" }
      ]
    },
    workflowSteps: [
      { step: "01", title: "Record Everyday Transactions", desc: "As you record sales, purchases, and expenses, the intelligence engine structures your ledger in the background." },
      { step: "02", title: "Track Your Biashara Health Score", desc: "Watch your score increase from 60 to 90+ as cash flow discipline and debt collection improve." },
      { step: "03", title: "Export Bankable Statements in 1 Click", desc: "No expensive external accountant fees required for basic loan applications or investor reviews." },
      { step: "04", title: "Unlock SME Credit & Scale Faster", desc: "Present verifiable, tamper-evident financial performance records to Kenyan financial institutions." }
    ],
    disclaimer: null
  }
};
