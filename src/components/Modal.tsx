import { ReceiptEuro } from "lucide-react"
const categoryImages: Record<string, string> = {
  general: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  business: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  health: "https://images.unsplash.com/photo-1588776814546-ec7e5bfb2bdf",
  technology: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  entertainment: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
};

const Modal = ({ onClose, url, category, des }) => {
  const imageUrl = categoryImages[category] || categoryImages["general"];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="relative bg-white rounded-lg w-[90%] max-w-4xl h-[80vh] shadow-lg overflow-hidden flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full z-10"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt={category}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />

        <div className="p-6 overflow-y-auto flex-1">
          <h2 className="text-xl font-semibold mb-4 capitalize">{category}</h2>
          <p className="text-gray-700 mb-6">{des}</p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;