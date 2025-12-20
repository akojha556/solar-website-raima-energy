export const Button = ({ children, variant = "primary", className = "", size = "", ...props }) => {
     const base = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md cursor-pointer";
     const variants = {
          primary: "bg-green-600 text-white shadow hover:bg-green-700 hover:shadow-lg hover:scale-[1.03]",
          ghost: "text-black hover:text-blue-900 hover:scale-[1.03] group",
          ghostWhite: "text-black hover:text-white hover:scale-[1.03] group",
          outline: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
          neutralOutline: "border border-gray-600 text-gray-600 hover:bg-gray-900 hover:text-white"
     }
     const sizes = {
          sm: "px-3 py-1.5 text-sm",
          md: "px-4 py-2",
          lg: "px-6 py-3 text-base",
     };


     return (
          <button className={`${base} ${variants[variant]} ${className} ${sizes[size]}`} {...props}>{children}</button>
     )
}
