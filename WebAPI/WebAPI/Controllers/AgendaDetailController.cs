using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendaDetailController : ControllerBase
    {
        private readonly AgendaContext _context;

        public AgendaDetailController(AgendaContext context)
        {
            _context = context;
        }

        // GET: api/AgendaDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AgendaDetail>>> GetAgendaDetails()
        {
            return await _context.AgendaDetails.ToListAsync();
        }

        // GET: api/AgendaDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AgendaDetail>> GetAgendaDetail(int id)
        {
            var agendaDetail = await _context.AgendaDetails.FindAsync(id);

            if (agendaDetail == null)
            {
                return NotFound();
            }

            return agendaDetail;
        }

        // PUT: api/AgendaDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAgendaDetail(int id, AgendaDetail agendaDetail)
        {
            if (id != agendaDetail.PMId)
            {
                return BadRequest();
            }

            _context.Entry(agendaDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgendaDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AgendaDetail
        [HttpPost]
        public async Task<ActionResult<AgendaDetail>> PostAgendaDetail(AgendaDetail agendaDetail)
        {
            _context.AgendaDetails.Add(agendaDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAgendaDetail", new { id = agendaDetail.PMId }, agendaDetail);
        }

        // DELETE: api/AgendaDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AgendaDetail>> DeleteAgendaDetail(int id)
        {
            var agendaDetail = await _context.AgendaDetails.FindAsync(id);
            if (agendaDetail == null)
            {
                return NotFound();
            }

            _context.AgendaDetails.Remove(agendaDetail);
            await _context.SaveChangesAsync();

            return agendaDetail;
        }

        private bool AgendaDetailExists(int id)
        {
            return _context.AgendaDetails.Any(e => e.PMId == id);
        }
    }
}
