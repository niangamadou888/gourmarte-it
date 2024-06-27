var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

BTCJ = jQuery.noConflict();
jQuery(document).ready(function () {
	if (typeof(btcModuleIds) != 'undefined') {
		for (var i = 0; i < btcModuleIds.length; i++) {
			jQuery('#btcontentslider' + btcModuleIds[i]).css("direction", "ltr");
			jQuery('#btcontentslider' + btcModuleIds[i]).fadeIn("fast");
			
			if(btcModuleOpts[i].width=='auto'){
				jQuery('#btcontentslider' + btcModuleIds[i] + ' .slide').width(jQuery('#btcontentslider' + btcModuleIds[i] + ' .slide').width());
			}
			
			BTCJ('#btcontentslider' + btcModuleIds[i]).slides(btcModuleOpts[i]);
			if (jQuery("html").css("direction") == "rtl") {
				jQuery('#btcontentslider' + btcModuleIds[i] + ' .slides_control').css("direction", "rtl");
			}
		}
	}
	jQuery('img.hovereffect').hover(function () {
		jQuery(this).stop(true).animate({
			opacity : 0.5
		}, 300)
	}, function () {
		jQuery(this).animate({
			opacity : 1
		}, 300)
	})
})


}
/*
     FILE ARCHIVED ON 19:34:23 Jan 20, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:04:38 Jun 27, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.591
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.131
  esindex: 0.009
  cdx.remote: 40.5
  LoadShardBlock: 120.606 (3)
  PetaboxLoader3.datanode: 134.386 (5)
  PetaboxLoader3.resolve: 164.686 (3)
  load_resource: 193.263 (2)
*/