import WarningModal from "./Components/WarningModal";

function App() {
  return (
    <div
      className="w-screen
     h-screen p-10 "
    >
      <WarningModal
        title="Are you sure you want to delete this record?"
        message="This action cannot be undone. Please confirm if you wish to proceed."
        confirmText="Delete"
        onConfirm={() => {}}
        onClose={() => {}}
      />
    </div>
  );
}

export default App;
