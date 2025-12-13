export const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
     const base = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md cursor-pointer";
     const variants = {
          primary: "bg-green-600 text-white shadow hover:bg-green-700 hover:shadow-lg hover:scale-[1.03] py-2 px-4",
          ghost: "text-black hover:text-blue-900 hover:scale-[1.03] group px-4 py-2",
          ghostWhite: "text-black hover:text-white hover:scale-[1.03] group px-4 py-2",
     }

     return (
          <button className={`${base} ${variants[variant]} ${className}}`} {...props}>{children}</button>
     )
}
