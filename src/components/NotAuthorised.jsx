// NotAuthorized.jsx
export default function NotAuthorized() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl font-bold text-red-600">🚫 Access Denied</h1>
            <p className="text-gray-700 mt-2">You don’t have permission to view this page.</p>
        </div>
    );
}
