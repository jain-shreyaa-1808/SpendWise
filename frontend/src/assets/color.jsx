import {
  Utensils, Home, Car, ShoppingCart, Gift,
  TrendingUp, TrendingDown, DollarSign,
  BarChart2, ArrowUp, FileText,
  Briefcase, CreditCard, ShoppingBag,
  Film, Wifi, Heart, Zap, Coffee, Plane
} from "lucide-react";

export const GAUGE_COLORS = {
  Income: {
    gradientStart: '#10b981',
    gradientEnd: '#059669',
    text: 'text-emerald-600',
    bg: 'bg-emerald-100'
  },
  Spent: {
    gradientStart: '#f43f5e',
    gradientEnd: '#e11d48',
    text: 'text-rose-600',
    bg: 'bg-rose-100'
  },
  Savings: {
    gradientStart: '#7c3aed',
    gradientEnd: '#6d28d9',
    text: 'text-violet-600',
    bg: 'bg-violet-100'
  }
};

export const COLORS = [
  '#7c3aed', '#4f46e5', '#0ea5e9', '#10b981',
  '#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4'
];

export const INCOME_COLORS = [
  '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'
];

export const CATEGORY_ICONS_Inc = {
  Salary: <TrendingUp className="w-4 h-4" />,
  Freelance: <BarChart2 className="w-4 h-4" />,
  Investment: <ArrowUp className="w-4 h-4" />,
  Bonus: <FileText className="w-4 h-4" />,
  Other: <DollarSign className="w-4 h-4" />
};

export const CATEGORY_ICONS = {
  Food: <Utensils className="w-4 h-4" />,
  Housing: <Home className="w-4 h-4" />,
  Transport: <Car className="w-4 h-4" />,
  Shopping: <ShoppingCart className="w-4 h-4" />,
  Entertainment: <Film className="w-4 h-4" />,
  Utilities: <Zap className="w-4 h-4" />,
  Healthcare: <Heart className="w-4 h-4" />,
  Salary: <Briefcase className="w-4 h-4" />,
  Freelance: <CreditCard className="w-4 h-4" />,
  Other: <DollarSign className="w-4 h-4" />
};

export const INCOME_CATEGORY_ICONS = {
  Salary: <Briefcase className="w-5 h-5 text-emerald-500" />,
  Freelance: <Plane className="w-5 h-5 text-emerald-500" />,
  Investment: <TrendingUp className="w-5 h-5 text-emerald-500" />,
  Gift: <Gift className="w-5 h-5 text-emerald-500" />,
  Bonus: <Zap className="w-5 h-5 text-emerald-500" />,
  Other: <DollarSign className="w-5 h-5 text-emerald-500" />,
};

export const EXPENSE_CATEGORY_ICONS = {
  Food: <Utensils className="w-5 h-5 text-rose-400" />,
  Housing: <Home className="w-5 h-5 text-rose-400" />,
  Transport: <Car className="w-5 h-5 text-rose-400" />,
  Shopping: <ShoppingBag className="w-5 h-5 text-rose-400" />,
  Entertainment: <Film className="w-5 h-5 text-rose-400" />,
  Utilities: <Zap className="w-5 h-5 text-rose-400" />,
  Healthcare: <Heart className="w-5 h-5 text-rose-400" />,
  Coffee: <Coffee className="w-5 h-5 text-rose-400" />,
  Other: <ShoppingCart className="w-5 h-5 text-rose-400" />,
};

export const colorClasses = {
  income: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-500",
    button: "bg-emerald-500 hover:bg-emerald-600 text-white",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  expense: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    ring: "ring-rose-500",
    button: "bg-rose-500 hover:bg-rose-600 text-white",
    iconBg: "bg-rose-100 text-rose-600",
  },
};
