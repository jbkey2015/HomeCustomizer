﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;


namespace HomeCustomizer.Controllers
{
    [Route("api/colorBoard")]
    [ApiController]
    public class ColorBoardController : ControllerBase
    {
        ColorBoardRepo _repository;

        public ColorBoardController(ColorBoardRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetColorBoards()
        {
            var allColorBoards = _repository.GetAllColorBoards();

            return Ok(allColorBoards);
        }

        [HttpGet("colorBoardId/{id}")]
        public IActionResult GetColorBoardById(int id)
        {
            var colorBoards = _repository.GetColorBoardById(id);
            if (colorBoards == null)
            {
                return NotFound("That color board option does not exist");
            }
            return Ok(colorBoards);
        }
    }
}