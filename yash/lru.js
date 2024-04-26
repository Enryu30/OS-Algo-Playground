var res,pro;
		var resource;
		var noofframes;
		var flagFound=0,flag=0,flag2=0;
				var count=0,hit=0,miss=0;
				var pagefault;
				var pages=[];		
                var frames=[];
				var frameAge=[];
				var resource = [];
                var isLRU;
			function BuildFormFields($amount) // For Resorce allocation
			{
            res = $amount;
                if(res<0)
                	alert("Invalid Inputs");
				var
					$container = document.getElementById('FormFields'),
					$item, $field, $i;
				$container.innerHTML = '';
				for ($i = 0; $i < $amount; $i++) {
					$item = document.createElement('div');
					$item.style.margin = '10px';
					$item.style.cssFloat="left"; 
					$item.style.width="50px";
					
					
                    $field = document.createElement('label');
                    $field.innerHTML = 'Page '+($i+1);
					$item.appendChild($field);
					$field = document.createElement('input');
					$field.name = 'Design[' + $i + ']';
					$field.type = 'text';
                    $field.setAttribute("class","form-control");
					$item.appendChild($field);
				$container.appendChild($item);

			
			
				}


            }

		

		function MRU()
		{  
			isLRU=2;
			MAIN();
			LRU1();
			RESULTS();
		}

		


			
		
			function MAIN()
			{
				
				noofframes = document.getElementById('noofFrames').value;
				var res_form = document.resource;

				count=0,hit=0,miss=0;
						for(var i = 1;i <= res; i++)
						{
							resource[i-1] = Number(res_form[i].value);
							pages[i-1] = Number(res_form[i].value);         //added
						}

						//added
						

						for(var i=0;i<noofframes;i++)
						{  
						  frames[i]=-1;
						  frameAge[i]=-1;
						}

						//
						console.log(resource);
						var form = document.Need;
						var ned = [];
						var i,j;
						



						//TABLE for NEED
						var tab_need = document.getElementById("tab_need");
						var row = tab_need.insertRow(0);
						var cell = row.insertCell(0);
						if(isLRU==0)	cell.innerHTML = "<b>FIRST COME FIRST SERVE</b>";
						if(isLRU==1)	cell.innerHTML = "<b>LEAST RECENTLY USED</b>";
						if(isLRU==2)	cell.innerHTML = "<b>MOST RECENTLY USED</b>";
						if(isLRU==3)	cell.innerHTML = "<b>OPTIMAL PAGE REPLACEMENT</b>";
						if(isLRU==4)	cell.innerHTML = "<b>MOST FREQNTLY USED</b>";
						if(isLRU==5)	cell.innerHTML = "<b>Second Chance REPLACEMENT(CLOCK)</b>";
						var pro_head = tab_need.insertRow(1);
                        var cell = pro_head.insertCell(0);
                        cell.innerHTML = "<b>Pages</b>";
                        for(i=1;i<=noofframes;i++)
                        {
                            cell = pro_head.insertCell(i);
                            cell.innerHTML = "<b>FRAME "+(i)+"</b>";
						}
						
						
						cell = pro_head.insertCell(i);
						cell.innerHTML = "<b>Page Fault</b>";
					}

					function RESULTS(){			
						var tab_alloc = document.getElementById("tab_need");
						var row = tab_alloc.insertRow(j+3);
						var cell = row.insertCell(0);
						cell.innerHTML ="Number of Page_Falts:"+miss;
						var cell = row.insertCell(0);
						cell.innerHTML ="Number of Page_Hits:"+hit;
						var cell = row.insertCell(0);
						cell.innerHTML ="Hit ratio:"+hit+"/"+res;

					   }
					   

			
					
	//////////////////////////////////////////////////////////////////////////FIFO
	


	/////////////////////////////////////////////////////////////////////////////////////OPR
						  
	