using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using HomeCustomizer.Models;
using Microsoft.AspNetCore.Mvc;


namespace HomeCustomizer.Controllers
{
    [Route("api/customHome")]
    [ApiController]
    public class CustomHomeController : ControllerBase
    {
        CustomHomeRepo _repository;

        public CustomHomeController(CustomHomeRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetCustomHomes()
        {
            var allCustomHomes = _repository.GetAllCustomHomes();

            return Ok(allCustomHomes);
        }

        [HttpGet("customHomeId/{id}")]
        public IActionResult GetCustomHomesById(int id)
        {
            var customHomes = _repository.GetCustomHomesById(id);
            if (customHomes == null)
            {
                return NotFound("That custom home option does not exist");
            }
            return Ok(customHomes);
        }
    }
}
