using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HomeCustomizer.Controllers
{
    [Route("api/siding")]
    [ApiController]
    public class SidingController : ControllerBase
    {
        SidingRepo _repository;

        public SidingController(SidingRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetSiding()
        {
            var allSiding = _repository.GetAllSiding();

            return Ok(allSiding);
        }

        [HttpGet("sidingId/{id}")]
        public IActionResult GetSidingById(int id)
        {
            var siding = _repository.GetSidingById(id);
            if (siding == null)
            {
                return NotFound("That siding option does not exist");
            }
            return Ok(siding);
        }
    }
}
