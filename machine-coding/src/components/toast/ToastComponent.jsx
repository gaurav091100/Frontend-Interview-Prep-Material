import { useToast } from "../../context/ToastContext";

export default function Toast() {
  const { showToast } = useToast();

  return (
     <div style={{ padding: '2rem' }}>
      <h1>Custom Toastify (CSS Only)</h1>
     <div style={{ display:"flex", gap:"10px"}}>
       <button onClick={() => showToast('Success!', 'success')} className="tab-button">Show Success</button>
      <button onClick={() => showToast('Error occurred', 'error')} className="tab-button">Show Error</button>
      <button onClick={() => showToast('Info toast', 'info')} className="tab-button">Show Info</button>
      <button onClick={() => showToast('Queued toast')} className="tab-button">Queue Toast</button>
     </div>
    </div>
  );
}
