import { AddTrainingProps } from "@/Types";

const AddTraining = ({ newTraining, setNewTraining, handleFormClose, handleFormSubmit }: AddTrainingProps) => {
    return (
        <div className="fixed z-20 inset-0 bg-black/70  flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add Training</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date</label>
                        <input
                            type="datetime-local"
                            value={newTraining.date}
                            onChange={(e) => setNewTraining({ ...newTraining, date: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Duration (min)</label>
                        <input
                            type="number"
                            value={newTraining.duration}
                            onChange={(e) => setNewTraining({ ...newTraining, duration: parseInt(e.target.value) })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Activity</label>
                        <input
                            type="text"
                            value={newTraining.activity}
                            onChange={(e) => setNewTraining({ ...newTraining, activity: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Customer Link</label>
                        <input
                            type="text"
                            value={newTraining.customer}
                            onChange={(e) => setNewTraining({ ...newTraining, customer:  e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter customer link"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleFormClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#4CAF50] text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTraining;