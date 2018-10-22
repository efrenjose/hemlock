var keystone = require('keystone');
var Types = keystone.Field.Types;

var TeamMember = new keystone.List('TeamMember');

TeamMember.add({
    name: { type: String, required: true },
    email: { type: Types.Email },
    phone: { type: String },
    school: { type: String },
    bio: { type: Types.Textarea, wysiwyg: true }
})

TeamMember.register();