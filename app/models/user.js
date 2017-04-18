import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false
  },
  name: {
    type: String,
    default: 'John Doe'
  },
  age: {
    type: Number,
    default: 18
  },
  emailAddress: {
    type: String,
    default: 'johndoe@email.com'
  },
  mailingAddress: {
    type: String,
    default: '124 Main St, City, ST 12345'
  },
  phoneNumber: {
    type: String,
    default: '(123) 456-7890'
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ],
  doctor: {
    type: Boolean,
    default: false
  },
  file: {
    type: String,
    default: ''
  }
},
  {
    timestamps: true
  }
);

userSchema.pre('save', function (next) {
  let user = this;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
