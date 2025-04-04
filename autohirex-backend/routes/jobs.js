const express = require('express');
const Job = require('../models/job');


router.post("/add", async(req, res) => {
    const { title, company, status, link, resume_match_score } = req.body;

    try {
        const newJob = new Job({ title, company, status, link, resume_match_score});
        await newJob.save();
        res.json({message: "Job added succesfully", job: newJob});
    } catch (error) {
        res.status(500).json({error: "Error adding job"});
    }
});


router.get("/", async (req, res) => {
    try {
        const jobs = await job.find();
        res.status(jobs);
    } catch (error) {
        res.status(500).json({error: "Error fetching jobs"});
    }
});

router.get("/", async (req, res) => {
    try {
        const job = await job.findById(req.params.id);
        if(!job) {
            return res.status(404).json({error: "Job not found "});
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: "Error fetching job" });
    }
});


router.put("/:id", async (req, res) => {
    const { status } = req.body;
  
    try {
      const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      res.json({ message: "Job status updated", job: updatedJob });
    } catch (error) {
      res.status(500).json({ error: "Error updating job status" });
    }
  });
  
  // Delete Job
  router.delete("/:id", async (req, res) => {
    try {
      await Job.findByIdAndDelete(req.params.id);
      res.json({ message: "Job deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting job" });
    }
  });
  
  module.exports = router;