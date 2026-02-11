export default function newTrip() {

  const interests = [
    { label: "Nature/Outdoors", value: "nature" },
    { label: "Museums/Culture", value: "culture" },
    { label: "Adventure activities", value: "adventure" },
    { label: "Nightlife", value: "nightlife" },
    { label: "Shopping", value: "shopping" },
    { label: "Scenic/Photography", value: "scenic" },
  ];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border p-5 rounded-xl w-120 max-w-full">
        <form action="" className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Create a New Trip
          </h1>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="p-1.5 border border-gray-500 rounded-lg"
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            className="p-1.5 border border-gray-500 rounded-lg"
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            className="p-1.5 border border-gray-500 rounded-lg"
          />
          {/* budget range */}
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="p-1.5 border border-gray-500 rounded-lg"
          />
          {/* <div className="flex gap-2 justify-center flex-col">
            <label>Budget Range</label>
            <div>
              <input type="number" placeholder="Min" min="0" className="p-1.5 border border-gray-500 rounded-lg"/>
              <span> - </span>
              <input type="number" placeholder="Max" min="0" className="p-1.5 border border-gray-500 rounded-lg"/>
            </div>
          </div> */}
          <p>Select your Interests</p>
          <div className="grid grid-cols-2">
            {
              interests.map((interest) => (
                <div key={interest.value} className="flex gap-2">
                  <input type="checkbox" name="interest" value={interest.value} />
                  <label>{interest.label}</label>
                </div>
              ))
            }
          </div>
          <div>
            {/* Pace preference */}
            <label htmlFor="pace">Pace Preference</label>
            <select
              name="pace"
              className="p-1.5 border border-gray-500 rounded-lg w-full"
              defaultValue=""
            >
              <option value="" disabled selected>
                Select pace
              </option>
              <option value="relaxed">Relaxed (2-3 places per day)</option>
              <option value="balanced">Balanced (3-4 places per day)</option>
              <option value="packed">Packed (5+ places per day)</option>
            </select>
          </div>

          <div className="w-full">
            <textarea
              name="free_text"
              placeholder="Optional Notes"
              className="h-28 p-2 w-full border border-gray-500 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#292A33] text-md px-5 py-1.5 rounded-xl w-full text-white text-center shadow-sm cursor-pointer"
          >
            Plan
          </button>
        </form>
      </div>
    </div>
  );
}
