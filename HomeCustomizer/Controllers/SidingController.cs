using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HomeCustomizer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SidingController : ControllerBase
    {
        // GET: api/<SidingController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SidingController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SidingController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SidingController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SidingController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
