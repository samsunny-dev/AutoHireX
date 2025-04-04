const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["applied", "interview", "rejected", "waiting"],
        default: "applied",
    },

    date: {
        type: Date,
        default: Date.now,
    },

    link: {
        type: String,
        required: true,
    },

    resume_match_score: {
        type: String,
        default: 0,
    },
})