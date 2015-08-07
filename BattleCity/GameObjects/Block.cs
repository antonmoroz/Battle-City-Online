using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BattleCity.Enums;

namespace BattleCity.GameObjects
{
	public class Block
	{
		#region Fields

		private readonly BlockType type;

		#endregion

		#region Constructor

		public Block(BlockType type)
		{
			this.type = type;
		}

		#endregion

		#region Properties

		public BlockType Type
		{
			get
			{
				return this.type;
			}
		}

		public bool HasChanges { get; set; }

		#endregion

		#region Methods

		public void Destroy()
		{
			//TODO: implement it
		}

		#endregion
	}
}