import {
    FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaGlobe, FaLinkedin, FaGithub
} from 'react-icons/fa';

export default function ContactInformation({ contact_information }) {
    // alert(JSON.stringify(contact_information, null, 2));
    return (
        <div className="space-y-3 text-lg">
            <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-200" />
                <span className="font-bold">Email:</span> {contact_information?.email || 'N/A'}
            </p>
            <p className="flex items-center gap-3">
                <FaPhone className="text-purple-200" />
                <span className="font-bold">Phone:</span> {contact_information?.phone_number || 'N/A'}
            </p>
            <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-200" />
                <span className="font-bold">Address:</span> {contact_information?.address || 'N/A'}
            </p>
        </div>
    );
}
