// import React from 'react'
// import { notFound } from 'next/navigation'

// // Mock data function - replace this with your actual data fetching logic (e.g., database or API call)
// // const getNaatById = (id: string) => {
//     // Example data
// //     const naats = [
// //         {
// //             id: '1',
// //             title: 'Faslon Ko Takalluf',
// //             author: 'Qari Waheed Zafar Qasmi',
// //             content: `Faslon ko takalluf hai hum se agar,
// // Hum bhi bebas nahin besahara nahi.
// // Khud unhi ko pukarenge hum door se,
// // Raaste mein agar paon thak jayenge.`,
// //             category: 'Hamd',
// //             views: 1205
// //         },
// //         // Add more mock data or fetch from DB
// //     ];
    
// //     return naats.find(n => n.id === id);
// // }

// interface PageProps {
//     params: {
//         naatid: string
//     }
// }

// const FullNaat = ({ params }: PageProps) => {
//     // const naat = (params.naatid);

//     // if (!params.naatid) {
//     //     return notFound();
//     // }

//     return (
//         <div className="container mx-auto px-4 py-8 max-w-4xl">
//             <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//                 {/* Header Section */}
//                 <div className="bg-emerald-600 p-6 text-white">
//                     <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-urdu">
//                         {naat.title}
//                     </h1>
//                     <div className="flex justify-center items-center gap-4 text-sm md:text-base opacity-90">
//                         <span>By: {naat.author}</span>
//                         <span>•</span>
//                         <span>{naat.category}</span>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8 md:p-12">
//                     <div className="prose prose-lg dark:prose-invert mx-auto text-center">
//                         <pre className="whitespace-pre-wrap font-urdu text-xl md:text-2xl leading-loose text-gray-800 dark:text-gray-200 font-medium">
//                             {naat.content}
//                         </pre>
//                     </div>
//                 </div>

//                 {/* Footer/Meta Section */}
//                 <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
//                     <span>Views: {naat.views}</span>
//                     <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
//                         Share Naat
//                     </button>
//                 </div>
//             </article>
//         </div>
//     )
// }

// export default FullNaat

import React from 'react'

const FullNaat = ( params :{ naatid: any }) => {
  return (
    <div>FullNaat : {params.naatid}</div>
  )
}

export default FullNaat