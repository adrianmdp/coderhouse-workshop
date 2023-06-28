import { useState } from "react";

const Contact = () => {
const [fields, setFields] = useState({
name: "",
lastname: "",
email: "",
subject: "",
message: "",
});

const handleSubmit = (e) => {
e.preventDefault();
console.log(fields);
};

return (
<div>
<h1>Contact</h1>

<form action="">∫
<div className="form-group">
<label htmlFor=""></label>
<input
type="text"
name="name"
value={fields.name}
onChange={(e) =>
setFields((state) => ({ ...state, name: e.target.value }))
}
/>
</div>
<div className="form-group">
<label htmlFor=""></label>
<input
type="text"
name="name"
value={fields.lastname}
onChange={(e) =>
setFields((state) => ({ ...state, lastname: e.target.value }))
}
/>
</div>
<div className="form-group">
<label htmlFor=""></label>
<input
type="text"
name="name"
value={fields.email}
onChange={(e) =>
setFields((state) => ({ ...state, email: e.target.value }))
}
/>
</div>
<div className="form-group">
<label htmlFor=""></label>
<input
type="text"
name="name"
value={fields.subject}
onChange={(e) =>
setFields((state) => ({ ...state, subject: e.target.value }))
}
/>
</div>
<div className="form-group">
<label htmlFor=""></label>
<input
type="text"
name="name"
value={fields.message}
onChange={(e) =>
setFields((state) => ({ ...state, message: e.target.value }))
}
/>
</div>
</form>
<button onClick={handleSubmit()}>Enviar</button>
</div>
);
};

export { Contact };
