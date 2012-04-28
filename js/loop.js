function loop()
{
	requestAnimationFrame(loop);
	
	CTX.globalAlpha = globalOpacity;	// opacité pour le fond (permet de voir les anciennes particules)
	
	CTX.fillStyle	= 'black';
	CTX.fillRect(0, 0, WIDTH, HEIGHT);
	
	CTX.globalAlpha = alpha;
	
	CTX.font = "30pt Calibri,Geneva,Arial";
	CTX.fillStyle = "rgb(100,100,100)";
	CTX.fillText("by Inateno", 280, 30);
	CTX.fillText("inateno.com", 20, 580);
	currentTime = Date.now();
	
	CTX.globalAlpha = particlesOpacity; // opacité pour les particules
	for (var i = 0; i < maxParticles; i++)
	{
		var p = Particles[i];
		
		// test si la durée de vie de la particule n'est pas dépassée
		if (currentTime - p.timestamp > p.life)
		{
			p.x		= xStart + (Math.random() * xEmission);
			p.y 	= yStart + Math.random() * yEmission;
			p.life	= Math.random() * particlesLifeMax + particlesLifeMin;
			p.randomX	= Math.random() * xRandom - (Math.random() * xRandom);
			p.randomY	= Math.random() * yRandom - (Math.random() * yRandom);
			p.width		= Math.random() * maxWidth;
			p.height	= Math.random() * maxHeight;
			p.timestamp = currentTime;
			
			if (colorAnimated)
			{
				p.red	= Math.floor(Math.random() * 255) + 1;
				p.green = Math.floor(Math.random() * 255) + 1;
				p.blue	= Math.floor(Math.random() * 255) + 1;
			}
			else
			{
				p.red	= red;
				p.green = green;
				p.blue	= blue;
			}
		}
		
		p.y += Math.random() * yForce + p.randomY;
		p.x += Math.random() * xForce + p.randomX;
		
		
		CTX.fillStyle = "rgb(" + p.red + "," + p.green + "," + p.blue + ")";
		CTX.fillRect(p.x, p.y, p.width, p.height);
	}
	
	if (a == true)
	{
		alpha += 0.001;
		if (alpha > 1)
		{
			a = false;
		}
	}
	else
	{
		alpha -= 0.001;
		if (alpha < 0.01)
		{
			a = true;
		}
	}
	
}