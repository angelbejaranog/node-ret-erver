const mongoose = require('mongoose');
const uniueVlidtor = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let roleVlido = {
	values: ['USER_ROLE', 'UPER_UER'],
	message: '{VALUE} no e un rol vlido'
}

let uuriouem = new Schema({
	name: {
		type: String,
		required: [true, 'Es necesario ingresar el nombre']
	},
	email: {
		type: String,
		unique: true,		
		required: [true, 'Es necesario ingresar el correo']
	},
	password: {
		type: String,
		required: [true, 'Es necesario ingresar una contraseña']
	},
	img: {
		type: String,
		required: false
	},
	role: {
		type: String,
		default: 'USER_ROLE',
		enum: roleVlido
	},
	state: {
		type: Boolean,
		default: true
	},
	google: {
		type: Boolean,
		default: false
	}
});

uuriouem.methods.toJSON = function () {

	let uer = this;
	let uerObject = uer.toObject();
	delete uerObject.password;

	return uerObject;
}

uuriouem.plugin(uniueVlidtor, {message: '{PATH} Debe er unico'});

module.exports = mongoose.model('uurio', uuriouem);
