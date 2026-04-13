// dummyStyles.js — SpendWise Design System (Violet/Purple theme)

export const dashboardStyles = {
  container: "min-h-screen p-4 md:p-6",

  headerContainer: "bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-2xl p-6 mb-8 shadow-xl relative overflow-hidden",
  headerContent: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
  headerTitle: "text-3xl md:text-4xl font-bold text-white",
  headerSubtitle: "text-violet-200 mt-1 text-sm",

  addButton: "flex items-center gap-2 bg-white text-violet-700 hover:bg-violet-50 px-5 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl font-semibold text-sm",

  timeFrameContainer: "flex justify-end mt-2",
  timeFrameWrapper: "flex gap-0 bg-white/15 backdrop-blur-sm p-1 rounded-xl border border-white/20",
  timeFrameButton: (isActive) =>
    `px-4 py-1.5 text-sm rounded-lg transition-all font-medium ${
      isActive
        ? "bg-white text-violet-700 shadow-sm"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`,

  summaryGrid: "grid grid-cols-1 lg:-mx-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-8",

  balanceBadge: "bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg text-xs font-medium",
  expenseBadge: "bg-rose-100 text-rose-700 px-2 py-0.5 rounded-lg text-xs font-medium",

  gaugeGrid: "grid grid-cols-1 -mx-5 xl:-mx-5 md:grid-cols-3 md:gap-13 lg:gap-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8",

  pieChartContainer: "hidden md:block bg-white lg:-mx-5.5 md:-mx-4 lg:p-1 xl:-mx-3 rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden mb-8",
  pieChartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3",
  pieChartTitle: "text-xl lg:pt-3 xl:pl-3 font-bold text-slate-800 mb-5 flex items-center gap-3",
  pieChartSubtitle: "text-sm lg:text-center xl:text-start xl:pl-3 text-slate-500 mb-3",
  pieChartHeight: "h-90 xl:h-80",

  tooltipContent: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    padding: "12px",
  },
  tooltipItem: { fontWeight: 400 },

  legendWrapper: { paddingTop: 8 },
  legendText: "text-sm font-medium text-slate-600",

  listsGrid: "grid grid-cols-1 gap-6",

  listContainer: "bg-white rounded-2xl lg:p-5 md:p-6 -mx-8 md:-mx-3 shadow-sm border border-slate-100",
  listHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3",
  listTitle: "text-xl font-bold text-slate-800 md:mt-3 mt-3 flex items-center gap-3",
  listSubtitle: "text-sm text-slate-400 font-normal",

  incomeCountBadge: "text-sm bg-emerald-100 px-2 mx-2 text-emerald-700 md:mx-2 md:mt-2 py-1 rounded-full font-medium",
  expenseCountBadge: "text-sm bg-rose-100 text-rose-700 px-2 mx-2 md:mx-2 md:mt-2 py-1 rounded-full font-medium",

  transactionList: "space-y-3",
  incomeTransactionItem: "flex items-center px-2 mx-2 my-2 md:p-4 md:mx-2 lg:px-3 justify-between p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100/60 transition-colors",
  expenseTransactionItem: "flex items-center justify-between mx-1 p-3 lg:p-3 md:p-4 md:mx-2 bg-rose-50 rounded-xl hover:bg-rose-100/60 transition-colors",

  incomeIconContainer: "p-2.5 bg-emerald-100 rounded-xl",
  expenseIconContainer: "p-2.5 bg-rose-100 rounded-xl",

  transactionContent: "flex items-center lg:gap-3 md:gap-3 gap-1",
  transactionDescription: "font-semibold text-slate-800 text-sm",
  transactionCategory: "text-xs text-slate-500 mt-0.5",
  transactionAmount: "text-right",
  incomeAmount: "font-bold text-emerald-600",
  expenseAmount: "font-bold text-rose-600",
  transactionDate: "text-xs text-slate-400",

  emptyState: "text-center py-8",
  emptyIconContainer: (color) => `w-16 h-16 mx-auto mb-4 rounded-full ${color} flex items-center justify-center`,
  emptyText: "text-slate-500 font-medium",

  viewAllContainer: "pt-4 border-t border-slate-100",
  viewAllButton: "w-full flex items-center justify-center gap-2 py-3 text-violet-600 font-semibold hover:bg-violet-50 rounded-xl transition-colors text-sm",

  iconContainer: (color) => `p-2.5 ${color} rounded-xl`,

  walletIconContainer: "p-2.5 bg-violet-100 rounded-xl",
  arrowDownIconContainer: "p-2.5 bg-rose-100 rounded-xl",
  piggyBankIconContainer: "p-2.5 bg-indigo-100 rounded-xl",
};

export const trendStyles = {
  positive: "text-rose-600",
  negative: "text-emerald-600",
  positiveRate: "bg-violet-100 text-violet-700",
  negativeRate: "bg-red-100 text-red-700",
};

export const chartStyles = {
  pieChart: "lg:-px-5 lg:text-xs xl:text-xl",
};

export const incomeStyles = {
  wrapper: "space-y-4 md:space-y-6 p-3 md:p-4 max-w-7xl mx-auto",
  headerContainer: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl -mx-7 lg:-mx-7 overflow-x-hidden p-4 md:p-6 mb-6 md:mb-8 shadow-xl",
  header: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6",
  headerTitle: "text-xl md:text-2xl lg:text-3xl font-bold text-white",
  headerSubtitle: "text-emerald-100 mt-1 text-sm md:text-base",
  addButton: "flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg font-semibold text-sm md:text-base",

  summaryGrid: "grid grid-cols-1 -mx-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5",

  chartContainer: "hidden md:block -mx-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-100",
  chartTitle: "text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",

  listContainer: "bg-white rounded-2xl -mx-7 md:rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 relative overflow-hidden",
  sectionTitle: "text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",

  filterContainer: "flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto",
  filterSelect: "appearance-none bg-white border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent w-full",
  exportButton: "flex items-center justify-center gap-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-xl transition-all text-sm hover:shadow-md w-full sm:w-auto",

  transactionList: "space-y-3 -mx-3 lg:-mx-0 md:-mx-0",
  viewAllButton: "mt-4 w-full text-center py-3 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-xl transition-colors flex items-center justify-center gap-2",

  emptyStateContainer: "text-center py-6 md:py-8",
  emptyStateIcon: "w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-emerald-50 flex items-center justify-center",
  emptyStateText: "text-slate-600 font-medium text-sm md:text-base",
  emptyStateSubtext: "text-xs md:text-sm text-slate-400 mt-1 md:mt-2",
  emptyStateButton: "mt-3 md:mt-4 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg mx-auto text-sm md:text-base",

  timeFrameContainer: "flex px-10 -mx-14 justify-center lg:-mx-0 md:-mx-0 lg:justify-end md:justify-end mt-4",
  chartHeaderContainer: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5",
  chartHeight: "h-64 md:h-80",

  tooltipContent: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    backdropFilter: "blur(4px)",
  },

  iconGreen: "p-2.5 bg-emerald-100 rounded-xl",
  iconBlue: "p-2.5 bg-blue-100 rounded-xl",
  iconPurple: "p-2.5 bg-violet-100 rounded-xl",

  textGreen: "text-emerald-600",
  textBlue: "text-blue-600",
  textPurple: "text-violet-600",

  filterIcon: "absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-slate-500 pointer-events-none",

  borderGreen: "border-l-4 border-emerald-500",
  borderBlue: "border-l-4 border-blue-500",
  borderPurple: "border-l-4 border-violet-500",
};

export const expensePageStyles = {
  container: "space-y-6 max-w-7xl",

  headerCard: "bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 rounded-2xl -mx-3.5 lg:-mx-0 overflow-x-hidden mb-8 shadow-xl p-4",
  headerContainer: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6",
  headerTitle: "text-2xl md:text-3xl font-bold text-white",
  headerSubtitle: "text-rose-100 mt-1",
  addButton: "flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg font-semibold",

  cardsGrid: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5",

  chartContainer: "hidden md:block bg-white rounded-2xl p-4 -mx-7 lg:-mx-0 shadow-sm border border-slate-100",
  chartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5",
  chartTitle: "text-xl font-bold text-slate-800 mb-5 flex items-center gap-3",
  exportButton: "flex items-center gap-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl transition-all text-sm hover:shadow-md",
  chart: "h-80",

  transactionsContainer: "bg-white rounded-2xl p-5 -mx-4 lg:-mx-0 md:-mx-5 shadow-sm border border-slate-100 relative overflow-hidden",
  transactionsHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-5",
  transactionsTitle: "text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",
  filterSelect: "appearance-none bg-white border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent w-full",

  transactionsList: "space-y-3 -mx-2 lg:-mx-0 md:-mx-0",
  viewAllButton: "mt-4 w-full text-center py-3 text-rose-600 font-semibold hover:bg-rose-50 rounded-xl transition-colors flex items-center justify-center gap-2",
  emptyState: "text-center py-8",
  emptyStateIcon: "w-16 h-16 mx-auto mb-4 rounded-full bg-rose-50 flex items-center justify-center",
  emptyStateText: "text-slate-600 font-medium",
  emptyStateSubtext: "text-sm text-slate-400 mt-2",

  iconOrange: "p-2.5 bg-orange-100 rounded-xl",
  iconAmber: "p-2.5 bg-amber-100 rounded-xl",
  iconYellow: "p-2.5 bg-yellow-100 rounded-xl",
  textOrange: "text-orange-600",
  textAmber: "text-amber-600",
  textYellow: "text-yellow-600",

  borderOrange: "border-l-4 border-orange-500",
  borderAmber: "border-l-4 border-amber-500",
  borderYellow: "border-l-4 border-yellow-500",

  tooltipContent: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    backdropFilter: "blur(4px)",
  },

  chartHeight: "h-80",
  chartExportButton: "flex items-center gap-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl transition-all text-sm hover:shadow-md",
  timeframePositioning: "flex px-10 -mx-14 justify-center lg:-mx-0 md:-mx-0 lg:justify-end md:justify-end mt-4",
  transactionItemContainer: "flex items-center justify-between p-3 -mx-2 hover:bg-rose-50/60 rounded-xl transition-all duration-200 border border-slate-100 cursor-pointer mb-3 group",
  transactionAmount: "font-bold",
  transactionIcon: "lg:p-3 md:p-3 p-1 rounded-xl",
};

export const profileStyles = {
  container: "max-w-4xl mx-auto py-8 px-4",
  mainContainer: "bg-white -mx-7 rounded-2xl shadow-sm overflow-hidden",

  header: "bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-8 text-center relative overflow-hidden",
  avatar: "w-24 h-24 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 ring-4 ring-white/30",
  userName: "text-2xl font-bold text-white",
  userEmail: "text-violet-200 mt-2",

  content: "p-8 -mx-6.5",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",

  card: "bg-slate-50 rounded-2xl p-6 border border-slate-100",
  cardTitle: "text-xl font-semibold pb-3 text-slate-800 flex items-center",
  icon: "w-5 h-5 mr-2 text-violet-600",

  label: "text-sm text-slate-500 block mb-1 font-medium",
  input: "w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-300 focus:border-violet-500 outline-none transition-all",
  inputWithError: "w-full px-4 py-2.5 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-violet-300 focus:border-violet-500 outline-none transition-all",

  buttonPrimary: "flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-2.5 rounded-xl font-semibold shadow-md transition-all",
  buttonSecondary: "flex-1 py-2.5 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-100 transition-all",
  editButton: "text-violet-600 hover:text-violet-700 font-semibold text-sm",

  changeButton: "text-violet-600 hover:text-violet-700 font-semibold lg:text-sm",

  securityItem: "flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200",
  securityText: "font-medium lg:text-sm text-slate-400",

  modalContent: "bg-white rounded-2xl p-6 lg:px-28 w-full max-w-md",
  modalHeader: "flex justify-between lg:whitespace-nowrap lg:space-x-20 mb-6",
  modalTitle: "text-xl font-bold lg:pl-10 text-slate-800",

  passwordLabel: "block text-sm font-medium text-slate-700 mb-1",
  passwordContainer: "relative",
  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600",

  errorText: "mt-1 text-sm text-red-600",
};

export const modalStyles = {
  overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-100",

  modalHeader: "flex justify-between items-center mb-5",
  modalTitle: "text-xl font-bold text-slate-800",
  closeButton: "text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-all",

  form: "space-y-4",
  label: "block text-sm font-semibold text-slate-700 mb-1",
  input: (ringColor) => `w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 ${ringColor} transition-all bg-slate-50 focus:bg-white`,

  typeButtonContainer: "flex gap-3",
  typeButton: (isSelected, color) =>
    `flex-1 py-2.5 rounded-xl font-semibold transition-all text-sm ${
      isSelected
        ? `${color} text-white shadow-md`
        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }`,

  submitButton: (color) => `w-full text-white py-3 rounded-xl font-semibold mt-2 shadow-md hover:shadow-lg transition-all ${color}`,

  colorClasses: {
    teal: {
      button: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
      ring: "focus:ring-violet-400",
      typeButtonSelected: "bg-violet-600",
    },
    orange: {
      button: "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600",
      ring: "focus:ring-rose-400",
      typeButtonSelected: "bg-rose-500",
    },
  },
};

export const loginStyles = {
  pageContainer: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 relative overflow-hidden",

  cardContainer: "w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative z-10",

  header: "bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-8 text-center relative overflow-hidden",
  avatar: "w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 ring-4 ring-white/30",
  headerTitle: "text-2xl font-bold text-white",
  headerSubtitle: "text-violet-200 mt-2 text-sm",

  formContainer: "p-8",

  errorContainer: "mb-6 p-3.5 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-100",
  errorIcon: "w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0",
  errorText: "break-words text-sm",

  label: "block text-sm font-semibold text-slate-700 mb-2",
  inputContainer: "relative",
  inputIcon: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
  input: "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-500 outline-none transition-all focus:bg-white",
  passwordInput: "w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-500 outline-none transition-all focus:bg-white",
  passwordToggle: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600",

  checkboxContainer: "mb-6 flex items-center",
  checkbox: "w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500 accent-violet-600",
  checkboxLabel: "ml-2 block text-sm text-slate-600 font-medium",

  button: "w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center",
  buttonDisabled: "opacity-75 cursor-not-allowed",

  signUpContainer: "mt-8 text-center",
  signUpText: "text-slate-500 text-sm",
  signUpLink: "font-semibold text-violet-600 hover:text-violet-700 hover:underline",

  spinner: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
};

export const navbarStyles = {
  header: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm",
  container: "flex items-center justify-between px-4 py-3 md:px-8 max-w-7xl mx-auto",

  logoContainer: "flex items-center gap-2 cursor-pointer",
  logoImage: "w-10 h-10 rounded-xl overflow-hidden",

  logoText: "text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent",

  userContainer: "relative",
  userButton: "flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-all",
  userAvatar: "w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm",
  statusIndicator: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white",
  userTextContainer: "text-left hidden md:block",
  userName: "text-sm font-semibold text-slate-800 truncate max-w-[120px]",
  userEmail: "text-xs text-slate-400 truncate max-w-[120px]",
  chevronIcon: (isOpen) => `w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`,

  dropdownMenu: "absolute top-14 right-0 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden",
  dropdownHeader: "px-4 py-3.5 border-b border-slate-100 bg-slate-50/60",
  dropdownAvatar: "w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm",
  dropdownName: "text-sm font-semibold text-slate-800",
  dropdownEmail: "text-xs text-slate-400",

  menuItemContainer: "p-1.5",
  menuItem: "w-full px-4 py-2.5 text-left hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-3 rounded-xl font-medium",
  menuItemBorder: "p-1.5 border-t border-slate-100",
  logoutButton: "flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-red-50 text-red-600 rounded-xl font-medium",
};

export const signupStyles = {
  pageContainer: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 relative overflow-hidden",

  cardContainer: "w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative z-10",

  header: "bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-8 text-center relative overflow-hidden",
  avatar: "w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 ring-4 ring-white/30",
  headerTitle: "text-2xl font-bold text-white",
  headerSubtitle: "text-violet-200 mt-2 text-sm",
  backButton: "absolute top-4 left-4 p-2 text-white rounded-xl hover:bg-white/20 transition-all",

  formContainer: "p-8",

  apiError: "mb-4 text-center text-sm text-red-600 bg-red-50 py-2 px-3 rounded-xl border border-red-100",
  fieldError: "mt-1 text-xs text-red-600",

  label: "block text-sm font-semibold text-slate-700 mb-2",
  inputContainer: "relative",
  inputIcon: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400",
  input: "w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-500 outline-none transition-all focus:bg-white",
  passwordInput: "w-full pl-10 pr-10 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-violet-400 focus:border-violet-500 outline-none transition-all focus:bg-white",
  passwordToggle: "absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600",

  checkboxContainer: "mb-6 flex items-center",
  checkbox: "w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500 accent-violet-600",
  checkboxLabel: "ml-2 block text-sm text-slate-600 font-medium",

  button: "w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center",
  buttonDisabled: "opacity-75 cursor-not-allowed",

  signInContainer: "mt-8 text-center",
  signInText: "text-slate-500 text-sm",
  signInLink: "font-semibold text-violet-600 hover:text-violet-700 hover:underline",

  spinner: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
};

export const transactionItemStyles = {
  container: (isEditing, classes) =>
    `flex flex-col md:flex-row items-stretch justify-between gap-3 p-3.5 rounded-xl border border-slate-100 mb-3 last:mb-0 transition-all ${isEditing ? classes.bg : "hover:bg-slate-50 hover:border-slate-200"}`,

  mainContainer: "flex items-center gap-3 flex-1 min-w-0",
  actionsContainer: "flex items-center justify-between gap-3 mt-2 md:mt-0",
  amountContainer: "min-w-[100px] flex-shrink-0 flex justify-end",
  buttonsContainer: "flex gap-1 flex-shrink-0",

  iconContainer: (iconClass, classes) => `${iconClass} ${classes.iconBg}`,

  contentContainer: "min-w-0 flex-1",
  description: "font-semibold text-slate-800 truncate text-sm",
  details: "text-xs text-slate-400 mt-0.5 truncate",

  input: (hasError, classes) =>
    `w-full bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 border ${hasError ? "border-red-400 ring-red-400" : `${classes.border} ${classes.ring}`}`,
  amountInput: (hasError, classes) =>
    `w-full max-w-[120px] bg-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 border ${hasError ? "border-red-400 ring-red-400" : `${classes.border} ${classes.ring}`}`,

  errorText: "text-xs text-red-500 mt-1",

  amountText: (amountClass, classes) => `${amountClass} ${classes.text}`,

  saveButton: (classes) => `p-2 ${classes.button} rounded-xl`,
  cancelButton: "p-2 bg-slate-200 text-slate-600 rounded-xl hover:bg-slate-300",
  editButton: (classes) => `p-2 ${classes.text} rounded-xl hover:${classes.bg}`,
  deleteButton: (classes) => `p-2 ${classes.text} rounded-xl hover:${classes.bg}`,
};

export const sidebarStyles = {
  sidebarContainer: {
    base: "hidden lg:flex flex-col pt-3 fixed top-16 bottom-0 z-30"
  },

  sidebarInner: {
    base: "bg-gradient-to-b from-slate-900 via-violet-950 to-indigo-950 h-full flex flex-col border-r border-white/10"
  },

  userProfileContainer: {
    base: "p-4 border-b pt-20 md:pt-5 lg:pt-5 xl:pt-5 border-white/10",
    collapsed: "px-3",
    expanded: "px-5"
  },

  userInitials: {
    base: "w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-lg"
  },

  menuList: {
    base: "space-y-1 px-3"
  },

  menuItem: {
    base: "relative flex items-center gap-3 py-2.5 rounded-xl font-medium transition-all duration-200",
    active: "text-white bg-white/15 shadow-sm",
    inactive: "text-white/60 hover:text-white hover:bg-white/10",
    collapsed: "justify-center px-0 mx-1",
    expanded: "px-3"
  },

  menuIcon: {
    active: "text-white",
    inactive: "text-white/50"
  },

  activeIndicator: "absolute right-3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse-dot",

  toggleButton: {
    base: "absolute -right-3 top-12 z-20 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all shadow-sm"
  },

  footerContainer: {
    base: "border-t border-white/10 p-4 mt-auto",
    collapsed: "px-3",
    expanded: "px-5"
  },

  footerLink: {
    base: "flex items-center gap-3 py-2.5 rounded-xl font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all",
    collapsed: "justify-center"
  },

  logoutButton: {
    base: "flex items-center gap-3 py-2.5 rounded-xl font-medium text-white/60 hover:text-red-400 hover:bg-red-500/10 w-full mt-1 transition-all",
    collapsed: "justify-center"
  },

  mobileOverlay: "fixed inset-0 z-40 lg:hidden",
  mobileBackdrop: "absolute inset-0 bg-black/50 backdrop-blur-sm",

  mobileSidebar: {
    base: "absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-slate-900 via-violet-950 to-indigo-950 shadow-2xl rounded-r-2xl overflow-hidden border-r border-white/10"
  },

  mobileHeader: "p-6 flex justify-between items-center border-b border-white/10",
  mobileUserContainer: "flex pt-28 items-center gap-3",
  mobileCloseButton: "p-2 rounded-xl hover:bg-white/10 text-white/70 hover:text-white",

  mobileMenuList: "space-y-1 px-3",
  mobileMenuItem: {
    base: "flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium",
    active: "text-white bg-white/15",
    inactive: "text-white/60 hover:bg-white/10 hover:text-white"
  },

  mobileFooter: "border-t border-white/10 p-5 mt-auto",
  mobileFooterLink: "flex items-center gap-4 py-2.5 font-medium text-white/60 hover:text-white",
  mobileLogoutButton: "flex items-center gap-4 py-2.5 font-medium text-white/60 hover:text-red-400 w-full",

  mobileMenuButton: "lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-xl"
};

export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const styles = {
  layout: {
    root: "min-h-screen bg-slate-50",
    mainContainer: (sidebarCollapsed) =>
      `p-4 pt-6 transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`,
  },

  header: {
    container: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",
    title: "text-2xl font-bold text-slate-800",
    subtitle: "text-slate-500",
  },

  statCards: {
    grid: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6",
    card: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all",
    cardHeader: "flex items-start justify-between",
    cardTitle: "text-sm font-semibold text-slate-500 uppercase tracking-wide",
    cardValue: "text-2xl font-bold text-slate-800 mt-1.5",
    cardFooter: "text-sm text-slate-500 mt-3",
    iconContainer: (color) => {
      const map = {
        teal: "bg-violet-100",
        green: "bg-emerald-100",
        orange: "bg-rose-100",
        blue: "bg-sky-100",
      };
      return `p-3 rounded-xl ${map[color] || "bg-slate-100"}`;
    },
    icon: (color) => {
      const map = {
        teal: "text-violet-600 w-5 h-5",
        green: "text-emerald-600 w-5 h-5",
        orange: "text-rose-600 w-5 h-5",
        blue: "text-sky-600 w-5 h-5",
      };
      return map[color] || "text-slate-600 w-5 h-5";
    },
  },

  grid: {
    main: "grid grid-cols-1 xl:grid-cols-3 gap-5",
    leftColumn: "xl:col-span-2 space-y-5",
    rightColumn: "space-y-5",
  },

  cards: {
    base: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100",
    header: "flex items-center justify-between mb-5",
    title: "text-lg font-bold text-slate-800 flex items-center gap-2",
  },

  transactions: {
    cardHeader: "flex items-center justify-between mb-4",
    cardTitle: "text-lg font-bold text-slate-800 flex items-center gap-2",
    refreshButton: "p-2 hover:bg-slate-100 rounded-xl text-slate-500 hover:text-violet-600 transition-all",
    refreshIcon: (loading) => `w-4 h-4 transition-all ${loading ? "animate-spin" : ""}`,
    dataStackingInfo: "flex items-center gap-2 text-xs text-slate-400 mb-4 bg-slate-50 px-3 py-2 rounded-xl",
    dataStackingIcon: "w-4 h-4 text-violet-400 flex-shrink-0",
    listContainer: "space-y-1",
    transactionItem: "flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all",
    icon: "w-4 h-4 text-slate-500",
    details: "ml-1",
    description: "text-sm font-semibold text-slate-800",
    meta: "text-xs text-slate-400 mt-0.5",
    emptyState: "text-center py-10",
    emptyIconContainer: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center",
    emptyIcon: "w-8 h-8 text-slate-300",
    emptyText: "text-slate-400 font-medium",
    viewAllContainer: "mt-2 pt-2 border-t border-slate-100",
    viewAllButton: "w-full text-center py-2.5 text-violet-600 font-semibold hover:bg-violet-50 rounded-xl transition-all text-sm flex items-center justify-center gap-2",
  },

  categories: {
    title: "text-lg font-bold text-slate-800 flex items-center gap-2 mb-4",
    titleIcon: "w-5 h-5 text-violet-500",
    list: "space-y-3",
    categoryItem: "flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all",
    categoryIconContainer: "p-2 bg-violet-100 rounded-lg",
    categoryIcon: "w-4 h-4 text-violet-600",
    categoryName: "text-sm font-semibold text-slate-700",
    categoryAmount: "text-sm font-bold text-slate-800",
    summaryContainer: "mt-5 pt-4 border-t border-slate-100",
    summaryGrid: "grid grid-cols-2 gap-3",
    summaryIncomeCard: "bg-emerald-50 rounded-xl p-3 border border-emerald-100",
    summaryExpenseCard: "bg-rose-50 rounded-xl p-3 border border-rose-100",
    summaryTitle: "text-xs font-semibold text-slate-500 uppercase tracking-wide",
    summaryValue: "text-lg font-bold text-slate-800 mt-1",
  },

  colors: {
    expenseChange: (change) => (change > 0 ? "text-rose-600" : "text-emerald-600"),
    transaction: {
      bg: (type) => (type === "income" ? "bg-emerald-100" : "bg-rose-100"),
      text: (type) =>
        type === "income"
          ? "text-emerald-600 font-bold text-sm"
          : "text-rose-600 font-bold text-sm",
    },
  },
};
