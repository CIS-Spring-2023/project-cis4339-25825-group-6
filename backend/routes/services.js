const express = require('express');
const router = express.Router();
const { Service } = require('../models/models');
// Create a new service
router.post('/services', async (req, res) => {
  try {
    console.log(req.body);
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all active services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({ active: true });
    res.send(services);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific service by ID
router.get('/services/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send();
    }
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a service by ID
router.patch('/services/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description', 'isActive'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send();
    }
    updates.forEach((update) => (service[update] = req.body[update]));
    await service.save();
    res.send(service);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Soft delete a service by ID
router.delete('/services/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send();
    }
    service.isActive = false;
    await service.save();
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
