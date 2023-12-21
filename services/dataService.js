const express = require('express');
const DataModel = require('../model/dataModel');

class DataService {
  static async saveData(data) {
    try {
      const result = await DataModel.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = DataService;